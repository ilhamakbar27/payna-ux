import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
// import Pages from "../Pages";
// import React from 'react'


const rootLayout = () => {
  return (
    <>
      <>
        <Nav />
        <Outlet/>
        {/* <Pages/> */}
        <Footer />{" "}
      </>
    </>
  );
};

export default rootLayout;
