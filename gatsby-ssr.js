import React from "react";
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-QR6W0QNGLS`}
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QR6W0QNGLS'); 
      `,
      }}
    />,
  ]);
};