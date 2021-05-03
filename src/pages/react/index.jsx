import React from 'react';
import { myRenderToStaticMarkup } from "../../hooks";
import { Layout } from "../../layout";

export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      <div id="root"></div>
      <script src="../assets/js/react.js"></script>
    </Layout>
  )
};
