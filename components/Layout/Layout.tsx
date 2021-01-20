import React from 'react';
import cn from 'classnames';
import { ThemeContextProvider } from '../../utils/context/ThemeContext';
import Alert from '../Alert';
import Footer from '../Footer';
import Meta from '../Meta';
import styles from './Layout.module.scss';

type Props = {
  theme?: 'light' | 'dark';
  preview?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ theme = 'light', preview, children }: Props) => (
  <ThemeContextProvider value={{ theme }}>
    <Meta />
    <div className={cn(styles.container, { [styles.darkTheme]: theme === 'dark' })}>
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </ThemeContextProvider>
);

export default Layout;
