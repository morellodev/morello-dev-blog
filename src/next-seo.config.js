const defaultSeo = {
  description:
    "Notes about JavaScript, ReactJS and more about front-end development by Dennis Morello.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.morello.dev",
    site_name: "JavaScript Notes by Dennis Morello",
    title: "JavaScript Notes by Dennis Morello",
    images: [
      {
        url: "https://morello.dev/images/profile.png",
        width: 400,
        height: 400,
        alt: "Dennis Morello",
      },
    ],
  },
  twitter: {
    handle: "@dennismorello",
    cardType: "summary_large_image",
  },
};

const blogJsonLd = {
  url: "https://blog.morello.dev",
  title: "JavaScript Notes by Dennis Morello",
  authorName: "Dennis Morello",
  description:
    "Notes about JavaScript, ReactJS and more about front-end development by Dennis Morello.",
};

const socialProfileJsonLd = {
  type: "Person",
  name: "Dennis Morello",
  url: "https://morello.dev",
  sameAs: [
    "https://twitter.com/dennismorello",
    "https://instagram.com/dennismrl",
    "https://linkedin.com/in/dennismorello",
  ],
};

export default defaultSeo;

export { blogJsonLd, socialProfileJsonLd };
