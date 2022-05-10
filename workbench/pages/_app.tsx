import 'sanitize.css';
import '../styles/globals.css';

import Main from '../components/main';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
export default App;
