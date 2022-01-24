import '../styles/globals.css';

import type { AppProps } from 'next/app';

import markdownElements from '../components/markdown-elements';
import PageLayout from '../components/page-layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} components={markdownElements} />
    </PageLayout>
  );
}

export default App;
