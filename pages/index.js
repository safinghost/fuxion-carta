import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { XLg } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';

import logo from "../assets/img/logo-fuxion.jpeg"
import wsp from "../assets/img/whatsapp.png"
import img1 from "../assets/img/carta/1.jpeg"
import img2 from "../assets/img/carta/2.jpeg"
import img3 from "../assets/img/carta/3.jpeg"
import img4 from "../assets/img/carta/4.jpeg"
import img5 from "../assets/img/carta/5.jpeg"

export default function Home() {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(false);

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  return (
    <div className='body'>
        <div>
          <Link href='https://wa.me/message/HNUBBJVSY2LJB1'> 
            <a target="_blank" className='wspButton'>
              <Whatsapp className='wspIcon'/>
            </a> 
          </Link>
        </div>

      <div className={model ? "model open" : "model"}>
        <Image
          width="800%"
          height="800%"
          src={tempImgSrc}
          alt="Logo Fuxion"
        />
        <XLg onClick={()=> setModel(false)} />
      </div>

      <div className='img'>
        <Image
          width="200%"
          height="200%"
          src={logo}
          alt="Logo Fuxion"
        />
      </div>
      <div className="d-grid gap-2 buttons">
        <Button onClick={() => getImg(img1)} className='button' variant="primary">Bebidas en Jarra</Button>
        <Button onClick={() => getImg(img2)} className='button' variant="secondary">Bebidas en botella</Button>
        <Button onClick={() => getImg(img3)} className='button' variant="success">Shots, Vino, Cervezas, Gaseosas y Cigarrillos</Button>
        <Button onClick={() => getImg(img4)} className='button' variant="warning">Copas</Button>
        <Button onClick={() => getImg(img5)} className='button' variant="info">Pikeos</Button>
      </div>
    </div>
  )
}
