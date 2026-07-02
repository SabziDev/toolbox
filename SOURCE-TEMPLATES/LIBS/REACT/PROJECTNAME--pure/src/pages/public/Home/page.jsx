import pagesMeta from "@public/data/pages-meta/pages-meta";

import Head from "@/pages/components/Head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{pagesMeta.home.title}</title>
        <meta name="description" content={pagesMeta.home.desc} />
      </Head>

      <h1>Home</h1>
    </>
  );
};

export default Home;
