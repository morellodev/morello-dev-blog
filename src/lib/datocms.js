import { GraphQLClient, gql } from "graphql-request";

const { DATOCMS_API_TOKEN, DATOCMS_GRAPHQL_ENDPOINT } = process.env;

const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function request(query, variables) {
  const client = new GraphQLClient(DATOCMS_GRAPHQL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}

export async function getAllPostsWithSlug() {
  const query = gql`
    {
      allPosts {
        slug
      }
    }
  `;

  return request(query);
}

export async function getAllPostsForHomePage() {
  const query = gql`
    {
      allPosts(orderBy: publicationDate_DESC, first: 20) {
        title
        slug
        excerpt
        publicationDate
        coverImage {
          responsiveImage(imgixParams: { fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          avatar {
            url(imgixParams: { fit: crop, w: 100, h: 100 })
          }
        }
      }
    }

    ${responsiveImageFragment}
  `;

  return request(query);
}

export async function getPostBySlugAndMorePosts(slug) {
  const query = gql`
    query PostBySlug($slug: String) {
      post(filter: { slug: { eq: $slug } }) {
        title
        slug
        content
        publicationDate
        coverImage {
          responsiveImage(imgixParams: { fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          avatar {
            url(imgixParams: { fit: crop, w: 100, h: 100 })
          }
        }
        meta: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      morePosts: allPosts(
        orderBy: publicationDate_DESC
        first: 2
        filter: { slug: { neq: $slug } }
      ) {
        title
        slug
        excerpt
        publicationDate
        coverImage {
          responsiveImage(imgixParams: { fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          avatar {
            url(imgixParams: { fit: crop, w: 100, h: 100 })
          }
        }
      }
    }

    ${responsiveImageFragment}
  `;

  return request(query, { slug });
}

export async function getAuthorBySlug(slug) {
  const query = gql`
    query AuthorBySlug($slug: String) {
      author(filter: { slug: { eq: $slug } }) {
        name
        avatar {
          url(imgixParams: { fit: crop, w: 200, h: 200 })
        }
        bio
      }
    }
  `;

  return request(query, { slug });
}
