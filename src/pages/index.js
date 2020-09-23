import Head from "next/head";

// Components
import Container from "@/components/container";
import Header from "@/components/header";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";

// Lib
import { getAllPostsForHomePage, getAuthor } from "@/lib/datocms";

export default function Home({ allPosts, author }) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>Dennis Morello</title>
        </Head>
        <Container>
          <Header author={author.author} />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.publicationDate}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const [allPosts, author] = await Promise.all([
    getAllPostsForHomePage(),
    getAuthor("dennis-morello"),
  ]);

  return {
    props: {
      allPosts,
      author,
    },
  };
}
