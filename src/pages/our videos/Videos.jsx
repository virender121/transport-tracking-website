import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import './Videos.css';

const Videos = () => {
  return (
    <div className='video'>
      <Container>
        <h1 className='video-heading text-center'>Some videos</h1>
        <div className='video-containers'  >
          <div className=' text-center; width-60%'>
            <iframe
            
              src='https://www.youtube.com/embed/M7SHEGIkLn4'
              title='YouTube video'
              allowFullScreen
            ></iframe>
          </div>
          <div className='video-description'>
            <span className='text-center;'>
            <h4 className='video-text text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              illum, cumque autem deleniti corporis facilis obcaecati facere
              labore accusantium sapiente dignissimos. Corporis iusto temporibus
              quibusdam eum. Similique sapiente voluptatem quos eveniet. Quos
              perferendis aut veritatis. Ea distinctio facilis hic quisquam
              explicabo quasi debitis reprehenderit sint?
            </h4>
            </span>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Videos;
