import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/footer";
import { StyledGlobal } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Non Profit Organization</title>
      </Head>
      <StyledGlobal />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
