import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Noman Ali - Portfolio`}
      </title>
    </Head>
  </>
);

export default Seo;
