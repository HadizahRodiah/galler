import React,{useState} from 'react'
import Ima from '../assets/Ima.jpg'
import Imb from '../assets/Imb.jpg'
import Imc from '../assets/Imc.jpg'
import Imf from '../assets/Imf.jpg'
import Img from '../assets/Img.jpg'
import Imh from '../assets/Imh.jpg'


const Galleryc = () => {

  const [isZoomed, setIsZoomed] = useState(false);
  const handleClick = () => {
    setIsZoomed(!isZoomed);
};

  const toy = [
    {
      id:1,
      image:Ima
    },
    {
      id:2,
      image:Imb
    },
    {
      id:3,
      image:Imc
    },
    {
      id:4,
      image:Imh
    },
    {
      id:5,
     image:Imf
    },
    {
      id:6,
      image:Ima
    },
    {
      id:7,
      image:Imb
    },
    {
      id:8,
      image:Img
    },
    {
      id:9,
      image:Imh
    }
  ]

    return (
        <div className='Box'>
             {toy.map(toy=>(
        <div className="image-container" key={toy.id} onClick={handleClick}>
            <h1>{toy.id}</h1>
            <div className='w-30 mb-5 mt-5 bg-gradient-to-r from-slate-700' >
            <img  
                src={toy.image} 
        
                className={isZoomed ? 'zoomed' : ''} 
            />
            </div>
            </div>
         ))}
         </div>
         
  )
}

export default Galleryc


