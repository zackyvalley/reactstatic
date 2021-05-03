import React from 'react';
import { Helmet } from "react-helmet";
import { myRenderToStaticMarkup } from "../../hooks";
import { Layout } from "../../layout";


export default () => {
  var list = [];
  var data = [
    { text: "1" },
    { text: "2" }
  ];

  for(var i in data){
    list.push(
      <li class={'test-' + i}>
        {data[i].text}aaaa
      </li>
    );
  }
  return myRenderToStaticMarkup(
    <Layout>
      <Helmet>
        <title>TESTAAA</title>
      </Helmet>
      about
      <ul>
        {list}
      </ul>
    </Layout>
  )
};
