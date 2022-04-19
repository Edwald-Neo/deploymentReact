import oringImg1 from '../../img/oRing/oRingBluePrint.png'
import oringImg2 from '../../img/oRing/O-Ring-1.png';
import oringImg3 from '../../img/oRing/O-Ring-2.png';

const Oring = () => {
    return(
        <>
            <div className="row">
                <div className="col-12 oRingLayer">                
                    
                    <div className="card-size text-center">
                            <img src={oringImg1} className="card-img-top flex-row card-img-size p-3" alt="O-Ring Blue-Print" />
                            <img src={oringImg2} className='card-img-top flex-row card-img-size p-3' alt='O-Ring Illustration' />
                            <img src={oringImg3} className='card-img-top flex-row card-img-size p-3' alt='O-Ring Illustration' />
                        <div className="card-body">
                            <p className="card-text text-primary">O-Rings are the most commonly used seals in Hydraulic and Pneumatic transmission systems</p>
                            <p className='text-center'>
                               <ul className='text-primary material-text'>
                                    <li>Materials</li>
                                    <li className='material-text-disc ms-4'>HNBR CR NBR VMQ</li>
                                    <li className='material-text-disc ms-4'>EPDM PU FKM SBR</li>
                                </ul> 
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Oring;