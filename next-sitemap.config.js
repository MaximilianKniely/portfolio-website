/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://maximilian-kniely.at',
  generateRobotsTxt: true, // overwrites existing robots.txt
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://maximilian-kniely.at/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './public',
}