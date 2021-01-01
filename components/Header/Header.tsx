import Hyperlink from '../Hyperlink';

const Header = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Hyperlink href="/" AnchorProps={{ className: 'hover:underline' }}>
      News Headlines
    </Hyperlink>
    .
  </h2>
);

export default Header;
