import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #7c2214;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 1000;
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrolled > 100);
    };

    const onScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop} visible={visible}>
      ↑ Top
    </ScrollButton>
  );
};

export default ScrollToTop;
