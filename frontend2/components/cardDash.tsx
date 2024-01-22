import React from 'react'
import { Card, CardBody } from "@nextui-org/react";

type Props = {
  valor: string,
  title: string,
  ico: any
}

export default function CardDash({valor, title, ico}: Props) {

  return (
    
      <Card className='w-72 h-28 flex justify-center items-center'>
        <CardBody className='flex relative'>
          <div className='space-y-3'>
            <h1 className='text-3xl text-orange-600'>{valor}</h1>
            <h2>{title}</h2>
          </div>
          <div className='absolute right-4 text-2xl rounded-full bg-orange-600 p-1'>
            {ico}
          </div>
        </CardBody>
      </Card>
    
  )
}