import cn from 'classnames';
import { useTheme } from '../../utils/context/ThemeContext';
import Container from '../Container';
import styles from './Footer.module.scss';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={cn(styles.container, { [styles.darkTheme]: theme === 'dark' })}>
      <Container>
        <div className={styles.padding}>
          <h3 className={styles.text}>News Headlines.</h3>
          <div className={styles.column}>
            <a
              href="https://github.com/ilovric00/news-headlines"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              View Source Code
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
