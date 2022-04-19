import jenntech from '../img/office-building.jpg';
import jennOff from '../img/office-1.jpg';

const AbtPic = () => {
    return(
        <>
        <div className='text-center'>
            <div className='line'></div>
                <img src={jenntech} className='rounded jennTech' style={{width:'450px'}}/>
                <img src={jennOff} className='rounded jennOff' style={{width:'450px'}}/>
            <div className='line-right'></div>
        </div>
        </>
    )
}

export default AbtPic;

