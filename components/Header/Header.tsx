import Hyperlink from '../Hyperlink';
import styles from './Header.module.scss';

const Header = () => (
  <h2 className={styles.heading}>
    <Hyperlink href="/" AnchorProps={{ className: styles.link }}>
      News Headlines
    </Hyperlink>
    .
  </h2>
);

export default Header;
