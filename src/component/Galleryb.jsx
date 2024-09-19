import React, {useState} from 'react';
import Ima from '../assets/Ima.jpg'
import Imb from '../assets/Imb.jpg'
import Imc from '../assets/Imc.jpg'
import Imf from '../assets/Imf.jpg'
import Img from '../assets/Img.jpg'
import Imh from '../assets/Imh.jpg'


const Galleryb = () => {
    const[isFullScreen, setIsFullScreen]=useState(false);
    const handleClick =()=>{
        setIsFullScreen(!isFullScreen);
        };
    return(
        <div>
        <img src={Ima} className={isFullScreen?'full-screen':'original-size'} onClick={handleClick}/>
        <img src={Imb} className={isFullScreen?'full-screen':'original-size'} onClick={handleClick}/>
        <img src={Imf} className={isFullScreen?'full-screen':'original-size'} onClick={handleClick}/>
        </div>
    )
}
export default Galleryb;