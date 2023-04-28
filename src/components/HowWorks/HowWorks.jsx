import React from 'react'
import './HowWorks.css'
const HowWorks = () => {
  return (
    <section>
      
         <div className="container " style={{marginRight:"2rem"}}>
                            <div className="row featurette text-secondary" id="aboutus">
                                <div className="col-md-7 order-md-2">
                                <h1 className='heading'>Who We Are ?</h1>
                                <h4 className='text-content'>We connect people, We help business to grow, we provide transportation Services. We provide an instant affordable Auto Transport
                                    On this platform you can join as Service provider to grow your business
                                </h4>
                                <h4 className='text-content'> We do not only provide customized storage solutions that aligns with your business, but also provide
                                    a range of other warehousing services, which includes fulfilment,logistic support, distribution, door-to-door transport, pick and pack operations, and so on.
                                </h4>
                                <h4 className='text-content'>Apart from the regular warehousing services, we provide a range of value added customer specific services to help them
                                    with their business, order fulfilment, packaging, assembly and kitting requirements
                                </h4>
                            </div>
                            <div className= "col-md-5 order-md-1">
                                <img src="https://source.unsplash.com/500x500/?account" alt='account' />
                            </div>
                           </div>
                            <hr className="featurette-divider" />
                            <span id="services" />
                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading">Expand Your Business <span className="text-muted">Register As a Service
                                        Provider</span>
                                    </h2>
                                    <p className="lead">Here, On this platform Service provider can reach out to many customers and will
                                        able to provide transport service.</p>
                                </div>
                                <div className="col-md-5">
                                    <img className="img-thumbnail" src="https://source.unsplash.com/500x500/?logistics" alt='logastic' />
                                    
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="featurette-heading">Transport Service At Your Door <span className="text-muted">Join Us As a
                                        Customer</span></h2>
                                    <p className="lead">Here, you can reach out to various transport service provider, Your goods our
                                        responsibility!!</p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <img className="img-thumbnail" src="https://source.unsplash.com/500x500/?delivery" alt ='delivery' />

                                </div>
                            </div>
                            {/* <hr className="featurette-divider" /> */}
                        </div>
    </section>
  )
}

export default HowWorks
