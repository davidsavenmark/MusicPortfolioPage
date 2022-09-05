import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Anton&family=Poppins&family=Roboto&display=swap"
            rel="stylesheet" />

        </Head>
        <body className='bg-gradient-to-r from-blue-100 to-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
