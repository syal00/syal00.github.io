export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://syal00.github.io';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
