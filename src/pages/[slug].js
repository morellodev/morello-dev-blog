import Head from "next/head";
import { useRouter } from "next/router";
import { ArticleJsonLd } from "next-seo";

// Components
import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import PostTitle from "@/components/post-title";
import SectionSeparator from "@/components/section-separator";

// Lib
import { getAllPostsWithSlug, getPostBySlugAndMorePosts } from "@/lib/datocms";
import markdownToHtml from "@/lib/md-to-html";

export default function Post({ post, morePosts }) {
  const router = useRouter();

  const getPostDescription = () => {
    const metaDescription = post.meta.find(
      ({ attributes }) => attributes?.name === "description"
    );

    return metaDescription?.attributes.content;
  };

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        images={[post.coverImage.responsiveImage.src]}
        datePublished={post.publicationDate}
        authorName={post.author.name}
        publisherName={post.author.name}
        publisherLogo={post.author.avatar.url}
        description={getPostDescription()}
        url={`https://blog.morello.dev/${post.slug}`}
      />

      <Layout>
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>{post.title} | Dennis Morello</title>
                  {post.meta
                    .filter((meta) => meta.tag === "meta")
                    .map((meta, index) => (
                      <meta key={index} {...meta.attributes} />
                    ))}
                </Head>

                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.publicationDate}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const { allPosts } = await getAllPostsWithSlug();

  return {
    paths: allPosts.map((post) => `/${post.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostBySlugAndMorePosts(params.slug);
  const content = await markdownToHtml(data?.post?.content || "");

  return {
    props: {
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  };
}
