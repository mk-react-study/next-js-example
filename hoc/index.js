import Head from 'next/head'

const Layout = props => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      />
    </Head>
    {props.children}
  </div>
)

export default Layout
