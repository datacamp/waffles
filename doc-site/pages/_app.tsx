import 'sanitize.css';
import '../styles/globals.css';

import PageLayout from '../components/page-layout';
import markdownElements from '../components/markdown-elements';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} components={markdownElements} />
    </PageLayout>
  );
}

export default App;
