module.exports = {
  images: {
    domains: ["www.datocms-assets.com"],
  },
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};
