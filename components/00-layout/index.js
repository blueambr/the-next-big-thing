import Head from "next/head";

const Layout = ({ children, data }) => {
  const { title } = data;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
