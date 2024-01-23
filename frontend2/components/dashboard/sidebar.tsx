"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import Link from 'next/link'
import React from 'react'
import { MdSpaceDashboard, MdGroup, MdOutlineLogin } from "react-icons/md";

type Props = {}

export default function Sidebar({ }: Props) {
  const items = [
    {
      key: "dashRh",
      label: "DashBoard RH",
      href: '/dashRh'
    },
    {
      key: "timeSheet",
      label: "Folha de ponto",
      href: '/rh/timeSheet'
    },
    {
      key: "providers",
      label: "Prestadores",
      href: '/'
    },
    {
      key: "relatórios",
      label: "Relatórios",
      href: '/'
    },
  ];

  return (
    <aside className="overflow-hidden bg-gradient-to-r from-Mooonlit-Asteroid1 via-Mooonlit-Asteroid2 to-Mooonlit-Asteroid3 h-full grid justify-items-start content-between rounded-xl p-2">
      <div className='space-y-2 pr-2'>
        <Button
          variant="light"
        >
          <Link href={'/dashboard'} className='flex hover:text-orange-500'>
            <MdSpaceDashboard className='text-orange-500 text-2xl mr-2' />
            <p className='text-base text-center'>DashBoard</p>
          </Link>
        </Button>
        <div className='flex'>
          <Dropdown backdrop="blur" placement='right'>
            <DropdownTrigger>
              <Button
                variant="light"
                className='hover:text-orange-500'
              >
                <MdGroup className='text-orange-500 text-2xl mr-2' />
                RH
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
              {(item) => (
                <DropdownItem
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                  variant='light'
                >
                  <Link href={item.href} className='hover:text-orange-500'>
                    {item.label}
                  </Link>
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div>
        <Button
          variant="light"
        >
          <Link href={'/system'} className='flex hover:text-orange-500'>
            <MdOutlineLogin className='text-orange-500 text-2xl mr-2' />
            <p className='text-base text-center truncate'>Sair</p>
          </Link>
        </Button>
      </div>
    </aside>
  )
}