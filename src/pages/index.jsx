import React from "react";
import { Helmet } from "react-helmet";
import { myRenderToStaticMarkup } from "../hooks";
import { Layout } from "../layout";
import Picture from '../components/Picture';

const App = () => <div>Use React !!</div>;

export default () => {
  return myRenderToStaticMarkup(
    <Layout>
      <Helmet>
        <title>TESTAAA</title>
        <meta name="description" content="トップページ説明文です" />
        <body class="test" />
      </Helmet>
      <App />
      <Picture pcimg='https://placekitten.com/1200/600' spimg='https://placekitten.com/750/600' />
    </Layout>
  )
};
