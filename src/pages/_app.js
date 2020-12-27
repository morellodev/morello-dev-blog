import { DefaultSeo, BlogJsonLd, SocialProfileJsonLd } from "next-seo";

// Configurations
import defaultSeo, {
  blogJsonLd,
  socialProfileJsonLd,
} from "../next-seo.config";

// Styles
import "@/styles/index.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import "prismjs/plugins/inline-color/prism-inline-color.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

function MorelloDevApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <BlogJsonLd {...blogJsonLd} />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
      <Component {...pageProps} />
    </>
  );
}

export default MorelloDevApp;
