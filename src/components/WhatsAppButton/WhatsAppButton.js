import React, { useState, useEffect } from 'react';
import whatsApp from '../Images/whatsapp_icon.png';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const handleClick = () => {
    window.location.href = 'https://wa.me/1234567890';
  };

  return (
    <div
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <img src={whatsApp} alt='whatsApp' />
    </div>
  );
};

export default WhatsAppButton;
