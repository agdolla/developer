import React from "react";
import Layout from "@theme/Layout";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import('buffer').then(({Buffer}) => {global.Buffer = Buffer;})

export default function API() {
  return (
    <Layout title="API">
      <SwaggerUI url="https://raw.githubusercontent.com/calendso/calendso/main/calendso.yaml" />
    </Layout>
  );
}
