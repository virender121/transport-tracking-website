import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'

const Videos = () => {
  return (
    <div className='video'>
      <Container>
        <h1 className='Video_heading'>Some videos</h1>
        <div className='devider'>
      <div className=" ratio-16x9 abt-video">
  <iframe   src="https://www.youtube.com/embed/YfDFKgGNP6s" title="YouTube video" allowFullScreen></iframe>
</div>
<div className='right-v' >
  <h4 className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum, cumque autem deleniti corporis facilis obcaecati facere labore accusantium sapiente dignissimos. Corporis iusto temporibus quibusdam eum. Similique sapiente voluptatem quos eveniet. Quos perferendis aut veritatis. Ea distinctio facilis hic quisquam explicabo quasi debitis reprehenderit sint?</h4>
</div>
</div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Videos
