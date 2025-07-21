// next-sitemap.config.js
module.exports = {
  siteUrl: "https://rem-met.com",
  generateRobotsTxt: true,
  exclude: ["/admin", "/private", "/koszyk", "/konto"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    additionalSitemaps: ["https://rem-met.com/sitemap-products.xml"],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/o-firmie": 0.7,
      "/standardy-bezpieczenstwa": 0.5,
      "/wygrodzenia-bezpieczenstwa/falcon": 0.9,
      "/wygrodzenia-bezpieczenstwa/gecko": 0.9,
      "/wygrodzenia-bezpieczenstwa/rhino": 0.9,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
