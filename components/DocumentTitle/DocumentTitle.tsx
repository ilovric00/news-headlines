import React from 'react';
import Head from 'next/head';

interface DocumentTitleProps {
  title?: string;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title = '' }) => {
  const docTitle = title ? `${title} | News Headlines` : 'News Headlines';
  return (
    <Head>
      <title>{docTitle}</title>
    </Head>
  );
};

export default DocumentTitle;
