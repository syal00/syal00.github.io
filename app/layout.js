import { GoogleTagManager } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/globals.scss';

export const metadata = {
  title: 'Rakesh Syal | Full Stack Developer',
  description: 'Full Stack Developer with expertise in Python, C#, .NET, PHP, JavaScript, HTML, and CSS. Experienced in web development, databases, and computer networking.',
  keywords: ['Rakesh Syal', 'Full Stack Developer', 'Web Developer', 'React', 'JavaScript', 'Python'],
  authors: [{ name: 'Rakesh Syal' }],
  openGraph: {
    title: 'Rakesh Syal | Full Stack Developer',
    description: 'Full Stack Developer with expertise in Python, C#, .NET, PHP, JavaScript, HTML, and CSS.',
    url: 'https://syal00.github.io',
    siteName: 'Rakesh Syal Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakesh Syal | Full Stack Developer',
    description: 'Full Stack Developer with expertise in web development.',
  },
};

export default function RootLayout({ children }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM;

  // Note: For static export (GitHub Pages), API routes are not available
  // Email functionality uses mailto links instead

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
