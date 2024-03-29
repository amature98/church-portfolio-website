import React from "react";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/resources.jpg";

function ArticlesPage() {
  return (
    <Page title="Articles - PCEA Mukinyi Parish">
      <Header
        title="Articles"
        bgimage={BgImage}
        height="70vh"
      />
    </Page>
  );
}

export default ArticlesPage;
