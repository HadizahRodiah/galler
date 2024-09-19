import React,{useState} from 'react'
import Ima from '../assets/Ima.jpg'
import Imb from '../assets/Imb.jpg'
import Imc from '../assets/Imc.jpg'
import Imf from '../assets/Imf.jpg'
import Img from '../assets/Img.jpg'
import Imh from '../assets/Imh.jpg'


const Gallerya = () => {
  AOS.init();
  const[isFullScreen, setIsFullScreen]=useState(false);
  const handleClick =()=>{
      setIsFullScreen(!isFullScreen);
      };

  const boy = [
    {
      id:1,
      image:Ima,
      aos:"flip-up"
    },
    {
      id:2,
      image:Imb,
      aos:"flip-down"
    },
    {
      id:3,
      image:Imc,
      aos:"flip-up"
    },
    {
      id:4,
      image:Imh,
      aos:"zoom-out-down"
    },
    {
      id:5,
     image:Imf,
     aos:"zoom-in-up"
    },
    {
      id:6,
      image:Ima,
      aos:"flip-right"
    },
    {
      id:7,
      image:Imb,
      aos:"flip-left"
      
    },
    {
      id:8,
      image:Img,
      aos:"zoom-out-left"
    },
    {
      id:9,
      image:Imh,
       aos:"zoom-in-left"

    },
    {
      id:10,
      image:Ima,
      aos:"zoom-out-left"

    },
    {
      id:11,
      image:Imb,
      aos:"zoom-in-down"
    },
    {
      id:12,
      image:Imc,
      aos:"zoom-in-up"
    },
    {
      id:13,
      image:Imh,
      aos:"flip-down"
    },
    {
      id:14,
     image:Imf,
     aos:"fade-left"
    },
    {
      id:15,
      image:Ima,
      aos:"fade-right"
    },
    {
      id:16,
      image:Imb,
      aos:"fade-down"
    },
    {
      id:17,
      image:Img,
      aos:"fade-up"
    },
    {
      id:18,
      image:Imh,
      aos:"fade-right"
    }
  ]

  return (<div>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-8 mt-8'>Gallery</h2>
            </div>
    <div className='Box'> 
       {boy.map(boy=>(
        <div data-aos={boy.aos} data-aos-easing="linear"
        data-aos-duration="1500" key={boy.id}>
        <div className='contain' >
          <div className="content"> 
            <span >   
          <h1 className='text-4xl font-bolder text-transparent bg-clip-text bg-gradient-to-r
         from-slate-400 to-slate-500'>{boy.id}</h1>
          <img src={boy.image} alt=""  className={isFullScreen?'full-screen':'original-size'} onClick={handleClick}/>
          </span>
          </div>
        </div>
        </div>
         ))}
      </div>  
      </div>
  )
}

export default Gallerya