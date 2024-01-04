"use client";
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react'
const axios = require('axios');
import { FaHouseChimney } from "react-icons/fa6";
import { TbTemperatureCelsius, TbTemperaturePlus } from "react-icons/tb";
import { MdCloud } from "react-icons/md";

export default function Hello() {
  //Collecting browser data
  const [icoWeather, setIcoWeather] = useState('')
  const [nameWeather, setNameWeather] = useState('')
  const [nameCity, setNameCity] = useState()
  const [tempWeather, setTempWeather] = useState('')

  //Request api openweathermap
  const params = {
    access_key: '48aa829de37e6a06e3d89bc1b747100d'
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=' + params.access_key + '&lang=pt_br&units=metric')
      //   .then((response: { data: any; }) => {
      //     const apiResponse = response.data;
      //     apiResponse.weather.forEach((element: { icon: SetStateAction<String>, description: any }) => {
      //       setNameWeather(element.description)
      //       setIcoWeather(`https://openweathermap.org/img/wn/${element.icon}@2x.png`)
      //     });
      //     setNameCity(apiResponse.name)
      //     setTempWeather(apiResponse.main.temp)
      //   }).catch((error: any) => {
      //     console.log(error);
      //   });
    })
  }, [icoWeather, params.access_key])

  return (
    <div className='bg-gray-400 rounded-xl p-5 w-full h-1/4 flex relative items-center'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold text-orange-600'>Olá, NOME!</h1>
        <p className='text-slate-100'>Bem Vindo ao Sistema da Bahia Visual.</p>
        <div>
          <div className='flex space-x-2 items-center mb-2 pl-2'>
            <FaHouseChimney className='text-xl' />
            <p className='text-slate-800'>
              {nameCity}
            </p>
          </div>

          <div className='flex space-x-2 items-center pl-2'>
            <TbTemperaturePlus className='text-xl' />
            <div className='text-slate-800 flex items-center'>
              Temperatura por volta de {tempWeather}
              <TbTemperatureCelsius className='text-xl' />
            </div>
          </div>

        </div>
        <div className='flex flex-col items-center absolute -right-0 -top-6'>
          <div className='relative'>
            <Image src={icoWeather} alt='' width={100} height={100} />
            <p className='flex text-center text-sm absolute top-20'>
              {nameWeather.toLocaleUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}