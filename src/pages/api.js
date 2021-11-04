import React from "react";
import Layout from "@theme/Layout";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import('buffer').then(({Buffer}) => {global.Buffer = Buffer;})

export default function API() {
  return (
    <Layout title="API">
      <div style={{ maxWidth: 1450, margin: "40px auto", padding: 16 }}>
        <h1>The Open API has been deprecated until 2022.</h1>
        <p>
          Due to rapid changes to our internal API and lack of resources to keep
          the public-facing API up <br />
          to date, we've decided to pause the official support for an exernal
          API.
        </p>
        <p>
          Please reach out to <a href="mailto:help@cal.com">help@cal.com</a> if
          you have a use-case that requires an open API <br />
          and we may be able to help you out directly.
        </p>
      </div>
      <div style={{ filter: "blur(4px)" }}>
        <SwaggerUI url="https://raw.githubusercontent.com/calendso/calendso/main/calendso.yaml" />
      </div>
    </Layout>
  );
}
