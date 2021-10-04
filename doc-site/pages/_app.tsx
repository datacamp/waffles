import '../styles/globals.css';

import type { AppProps } from 'next/app';

import markdownElements from '../components/markdown-elements';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} components={markdownElements} />;
}

export default App;
