import React from 'react'
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge, User } from "@nextui-org/react";
import Link from 'next/link';

type Props = {}

export default function NavMensage({ }: Props) {

  return (
    <>
      <h1 className='text-orange-500'>Mensagens não lidas:</h1>
      <div className='flex p-2 space-x-1 w-full justify-start items-center'>
        <Link href={'/'}>
          <Badge content="5" color="warning">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Badge>
        </Link>
        <Badge content="2" color="warning">
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </Badge>
        <Badge content="7" color="warning">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </Badge>
        <Badge content="1" color="warning">
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        </Badge>
      </div>
    </>
  )
}