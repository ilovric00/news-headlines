import React from 'react';
import Alert from '../Alert';
import Footer from '../Footer';
import Meta from '../Meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ preview, children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
