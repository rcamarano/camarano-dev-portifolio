import { useRef } from 'react';
import Header from './Header';
import scrollHandler from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const footerRef = useRef(null);

  return (
    <div>
      <Header scrollHandler={scrollHandler} />
      <div>{children}</div>
      <Footer footerRef={footerRef} />
    </div>
  );
}
