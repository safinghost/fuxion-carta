import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import React, { useState, useEffect  } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import { XLg } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';

import fondo from "../assets/img/fondo.png"
import img1 from "../assets/img/carta/carta-5.png"
import img2 from "../assets/img/carta/carta-6.png"
import img3 from "../assets/img/carta/carta-4.png"
import img4 from "../assets/img/carta/carta-3.png"
import img5 from "../assets/img/carta/carta-2.png"

export default function Home() {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(false);

  const [tooltip, setTooltip] = useState(true);

  const router = useRouter()

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModel(true)
    router.push(`/?images${imgSrc.src()}`, undefined, { shallow: true })
  }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if(url == "/"){
        setModel(false)
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <div className='body'>
      <Image
        layout="fill"
        src={fondo}
        alt="Fondo Fuxion"
        className='fondo'
      />
      <div>
        { tooltip ? 
        <div
          onClick={()=>setTooltip(false)}
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 100, 100, 0.85)',
            padding: '2px 10px',
            color: 'white',
            bottom: '90px',
            right: '30px',
            borderRadius: 3,
            zIndex: 1000,
          }}
        >
          Realiza tu pedido o reserva tu box privado!
        </div>
        :
        <></>
        }
        <Link href='https://wa.me/message/HNUBBJVSY2LJB1'>
          <a target="_blank" className='wspButton'>
            <Whatsapp className='wspIcon'/>
          </a> 
        </Link>
      </div>

      <div className={model ? "model open" : "model"}>
        <Image
          layout="fill"
          src={tempImgSrc}
          alt="Logo Fuxion"
        />
        <XLg onClick={()=> setModel(false)} />       
      </div>

      <div className="d-grid gap-2 buttons">
        <Button onClick={() => getImg(img1)} className='button' variant="primary">Bebidas en Jarra</Button>
        <Button onClick={() => getImg(img2)} className='button' variant="secondary">Bebidas en botella</Button>
        <Button onClick={() => getImg(img3)} className='button' variant="success">Shots, Vino, Cervezas, Gaseosas y Cigarrillos</Button>
        <Button onClick={() => getImg(img4)} className='button' variant="warning">Copas</Button>
        <Button onClick={() => getImg(img5)} className='button' variant="info">Pikeos</Button>
      </div>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          padding: '2px 10px',
          color: 'white',
          fontWeight: 'bold',
          bottom: '0px',
          textAlign: 'center', 
          borderRadius: 3,
        }}
      >
        Horario de atención: 3:00pm a 3:00am
      </div>
    </div>
  )
}
