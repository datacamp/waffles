import 'sanitize.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import Main from '../components/main';

function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
export default App;
