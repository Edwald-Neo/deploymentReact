import video from '../video/intro-video.mp4';

const Home = () => {
    return(
        <>
            <div className="row">
                <div className="col-lg-12 text-white mt-3 px-5 homeLayer">
                    <div className='text-center'>
                        <video height='400px' loop autoplay>
                            <source src={video} type='video/mp4'/>
                        </video>    
                    </div>
                    
                    <p className="first-line">
                        <span className="company-title-text me-2"><em><strong>Jennifer Technology Hengshui Co Ltd</strong></em></span> with 15 years of experience in rubber oil seal production, is a professional manufacturer and industry leader integrating Research & Development, Production and Sales of
                    </p>
                        <ul>
                            <li>Skeleton Oil Seal</li>
                            <li>O-Ring</li>
                            <li>Rubber Gasket</li>
                            <li>Pump & Valve Oil Seal</li>
                            <li>Oil Seal Cover ... etc</li>
                        </ul>

                    <p>
                        Since its establishment, Jennifer Technology Hengshui Co Ltd has always emphasized on the basic fundamental of maintaining a high level of quality control and process management to ensure that our products are of high quality. Our quality control team conducts checks and tests before shipment to ensure that our products delivered are of high quality and with accordance to our customers' satisfaction. In addition, we have placed a strong sales team that can provide sales and field service as and when required. Our customer service team are ready to provide support to our customers.
                    </p>
                    
                </div>
            </div>
        </>
    )
}

export default Home;