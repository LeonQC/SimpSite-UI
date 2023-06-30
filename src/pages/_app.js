
import Head from 'next/head';
import '../styles/globals.css';



function App({ Component, pageProps }) {
  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div>

      <Head>
        <title>SimpSite</title>
      </Head>
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Component {...pageProps} />

    </div>
    // </ThemeProvider>
  );
}

export default App;
