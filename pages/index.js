import data from "lib/pages";
import Layout from "@/layout";

const Home = () => {
  const { page } = data;

  return (
    <>
      <Layout data={page}>
        <h1>The Next Big Thing</h1>
      </Layout>
    </>
  );
};

export default Home;
