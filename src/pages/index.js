import Head from "next/head";

// Components
import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";

// Lib
import { getAllPostsForHomePage } from "@/lib/datocms";

export default function Home({ allPosts }) {
  const [heroPost, ...morePosts] = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>Dennis Morello</title>
        </Head>
        <Container>
          <Intro />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.publicationDate}
              author={heroPost.author}
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
  const allPosts = await getAllPostsForHomePage();

  return {
    props: {
      allPosts,
    },
  };
}
