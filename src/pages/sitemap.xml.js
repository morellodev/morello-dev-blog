// Lib
import { getAllPostsWithSlug } from "@/lib/datocms";

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[{ slug: "" }, ...posts]
      .map(({ slug }) => {
        return `
                <url>
                    <loc>${`https://blog.morello.dev/${slug}`}</loc>
                </url>
            `;
      })
      .join("")}
  </urlset>
`;

const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  const { allPosts } = await getAllPostsWithSlug();

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(allPosts));
  res.end();

  return { props: {} };
}

export default Sitemap;
