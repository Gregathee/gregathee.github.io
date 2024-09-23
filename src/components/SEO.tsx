import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description?: string;
}

const SEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet>
      <html className="no-js" lang="en" />
      <title>{title}</title>
      <meta name="description" content={description || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <meta name="theme-color" content="#fafafa" />

      <script>
        {`
          window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
          ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
        `}
      </script>
      <script src="https://www.google-analytics.com/analytics.js" async></script>
    </Helmet>
  );
};

export default SEO;