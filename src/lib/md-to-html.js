import remark from "remark";
import a11yEmoji from "@fec/remark-a11y-emoji";
import externalLinks from "remark-external-links";
import headings from "remark-autolink-headings";
import html from "remark-html";
import prism from "remark-prism";
import slug from "remark-slug";

export default async function markdownToHtml(markdown) {
  const htmlResult = await remark()
    .use(slug)
    .use(headings, { behavior: "wrap" })
    .use(externalLinks)
    .use(prism, {
      showSpotlight: true,
      plugins: [
        "prismjs/plugins/autolinker/prism-autolinker",
        "prismjs/plugins/inline-color/prism-inline-color",
        "prismjs/plugins/line-numbers/prism-line-numbers",
      ],
    })
    .use(a11yEmoji)
    .use(html)
    .process(markdown);

  return htmlResult.toString();
}
