import AbtPic from './about-display';

const About = () => {
    return(
        <>
            <div className='row'>
                <div className='col-lg-12 aboutLayer'>
                    <h3 className="text-white mb-4">
                        About Us
                    </h3>
                    <div className='text-center'>
                        <AbtPic />
                    </div>

                    <div>
                        <p className='text-white first-line text-start about-text d-block mt-5'>
                            Our quality control team conducts QC checks and tests prior to shipment to ensure that our products achieve customer satisfaction. In addition, we have a strong sales team that can provide sales and field service when needed. Our customer service team is ready to assist our customer. The company has passed ISO 9001:2008 quality management system certification and ROHS certification. Jennifer Technology Hengshui has also established long-term business relations with overseas countries and regions. Our Oil seals, O rings, rubber gaskets and other products are exported to Europe, America, Australia, Russia, Canada and other countries and regions. If you are interested in our products, feel free to send us your enquiries. We are also able to fulfill OEM and ODM orders. We will ensure that our high quality products and services will become your first choice and preferred supplier in China.
                        </p>
                    </div>
                    
                    <div className='text-white mx-5'>
                        For enquiries, please kindly feel free to contact us at <strong className='text-primary'><em>zipairubber@gmail.com</em></strong>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;