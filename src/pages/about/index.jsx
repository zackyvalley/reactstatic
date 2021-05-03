import React from 'react';
import { Helmet } from "react-helmet";
import { myRenderToStaticMarkup } from "../../hooks";
import { Layout } from "../../layout";


export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      <Helmet>
        <title>TESTAAA</title>
      </Helmet>
      about
    </Layout>
  )
};
