import '../styles/globals.css';

import type { AppProps } from 'next/app';

import MarkdownElements from '../components/markdown-elements';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} components={MarkdownElements} />;
}

export default App;
