import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamProFont = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-family-sans: ${beVietnamProFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
