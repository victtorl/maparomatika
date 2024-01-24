export default [
  { UserAgent: () => ['Googlebot', () => 'Bingbot'] },
  { Comment: 'Archivo de configuracion dia esperado' },
  { BlankLine: true },
  { Disallow: '/admin' },
  { Sitemap: `${process.env.NUXT_SITE_URL}/sitemap.xml` }
]