import Head from "next/head";
import { useRouter } from "next/router";

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
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/datocms";
import markdownToHtml from "@/lib/md-to-html";

export default function Post({ post, morePosts }) {
  const router = useRouter();

  return (
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
  );
}

export async function getStaticPaths() {
  const allPostsWithSlug = await getAllPostsWithSlug();

  return {
    paths: allPostsWithSlug.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);
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
