const { DATOCMS_API_TOKEN, DATOCMS_GRAPHQL_ENDPOINT } = process.env;

const responsiveImageFragment = `
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

async function fetchDatoCms(query, { variables } = {}) {
  const response = await fetch(DATOCMS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const jsonResponse = await response.json();

  if (jsonResponse.errors) {
    throw new Error(jsonResponse.errors[0].message);
  }

  return jsonResponse.data;
}

export async function getAllPostsWithSlug() {
  try {
    const data = await fetchDatoCms(`
      {
        allPosts {
          slug
        }
      }
    `);

    return data.allPosts;
  } catch (error) {
    throw error;
  }
}

export async function getAllPostsForHomePage() {
  try {
    const data = await fetchDatoCms(`
      {
        allPosts(orderBy: publicationDate_DESC, first: 20) {
          title
          slug
          excerpt
          publicationDate
          coverImage {
            responsiveImage(imgixParams: {fit: crop, w: 2000, h: 1000}) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            avatar {
              url(imgixParams: {fit: crop, w: 100, h: 100})
            }
          }
        }
      }

      ${responsiveImageFragment}
    `);

    return data.allPosts;
  } catch (error) {
    throw error;
  }
}

export async function getPostAndMorePosts(slug) {
  try {
    const data = await fetchDatoCms(
      `
      query PostBySlug($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          title
          slug
          content
          publicationDate
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000})
          }
          coverImage {
            responsiveImage(imgixParams: {fit: crop, w: 2000, h: 1000}) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            avatar {
              url(imgixParams: {fit: crop, w: 100, h: 100})
            }
          }
        }
        morePosts: allPosts(orderBy: publicationDate_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          publicationDate
          coverImage {
            responsiveImage(imgixParams: {fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            avatar {
              url(imgixParams: {fit: crop, w: 100, h: 100})
            }
          }
        }
      }
      ${responsiveImageFragment}
    `,
      {
        variables: {
          slug,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}
