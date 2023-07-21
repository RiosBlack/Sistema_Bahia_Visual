import { useState } from 'react';
import { HiComputerDesktop } from 'react-icons/hi2';
import {
    TbSquareRoundedArrowLeftFilled,
    TbSquareRoundedArrowRightFilled,
} from 'react-icons/tb';
import { RiFilePaper2Line } from 'react-icons/ri';
import { FaUserAlt, FaRegFileAlt } from 'react-icons/fa';
import Link from 'next/link';
import logo from 'src/assets/logo.png';
import Image from 'next/image';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const li =
        'flex items-center text-start text-[#F2F9FC] w-full hover:bg-[#F2F9FC] hover:rounded-l-xl hover:text-[#17112A] hover:p-2';
    const iconOpen = 'mr-3 h-7 w-7';
    const iconClose = 'h-8 w-8';

    return (
        <div
            className={`${
                open ? 'w-44' : 'w-16'
            } h-screen bg-[#F3773B] relative grid content-start gap-5 justify-items-center font-sans z-10`}
        >
            <div
                className={`absolute  ${
                    open ? 'h-8 w-8 -right-4 top-1' : 'h-8 w-8 -right-4 top-1'
                } rounded-xl bg-[#17112A] text-[#F2F9FC] hover:animate-pulse`}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <TbSquareRoundedArrowLeftFilled className="h-8 w-8" />
                ) : (
                    <TbSquareRoundedArrowRightFilled className="h-8 w-8" />
                )}
            </div>
            <div className="flex items-center justify-center p-3">
                {open ? (
                    <Image
                        src={logo}
                        width={80}
                        quality={100}
                        alt={'Logo da empresa Bahia Visual'}
                        className="bg-[#F2F9FC] h-12 p-2 rounded-lg "
                    />
                ) : (
                    <div className="h-14" />
                )}
            </div>
            <div className="grid space-y-5 w-full pl-3">
                <Link href={'/dashRh'} className={li}>
                    {' '}
                    <HiComputerDesktop
                        className={`${open ? iconOpen : iconClose}`}
                    />{' '}
                    <div>
                        <p>{open ? 'Dashboard' : ''}</p>
                        <p>{open ? 'Rh' : ''}</p>
                    </div>
                </Link>

                <Link href={'/folhas'} className={li}>
                    {' '}
                    <RiFilePaper2Line
                        className={`${open ? iconOpen : iconClose}`}
                    />{' '}
                    <div>
                        <p>{open ? 'Folha de ' : ''}</p>
                        <p>{open ? 'pagamento' : ''}</p>
                    </div>
                </Link>

                <Link href={'/prestadores'} className={li}>
                    {' '}
                    <FaUserAlt
                        className={`${open ? iconOpen : iconClose}`}
                    />{' '}
                    {open ? 'Prestadores' : ''}
                </Link>

                <Link href={'/relatorios'} className={li}>
                    {' '}
                    <FaRegFileAlt
                        className={`${open ? iconOpen : iconClose}`}
                    />{' '}
                    {open ? 'Relatórios' : ''}
                </Link>
            </div>
        </div>
    );
}
