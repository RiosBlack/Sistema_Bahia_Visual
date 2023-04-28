import { useState } from 'react';
import { HiComputerDesktop } from 'react-icons/hi2';
import {
    TbSquareRoundedArrowLeftFilled,
    TbSquareRoundedArrowRightFilled,
} from 'react-icons/tb';
import { RiFilePaper2Line } from 'react-icons/ri';
import { FaUserAlt, FaRegFileAlt } from 'react-icons/fa';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const li = 'flex justify-center items-center text-[#F2F9FC] w-full';

    return (
        <div
            className={`${
                open ? 'w-44' : 'w-14'
            } p-3 rounded-r-lg bg-[#F3773B] relative mt-2 grid gap-5 justify-items-center content-center h-60 font-sans`}
        >
            <div
                className={`absolute  ${
                    open ? 'h-8 w-8 -right-4 -top-3' : 'h-8 w-8 -right-4 -top-3'
                } rounded-xl bg-[#17112A] text-[#F2F9FC] hover:animate-pulse`}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <TbSquareRoundedArrowLeftFilled className="h-8 w-8" />
                ) : (
                    <TbSquareRoundedArrowRightFilled className="h-8 w-8" />
                )}
            </div>
            <div className={li}>
                {' '}
                <HiComputerDesktop
                    className={`${open ? 'mr-3' : ''} h-5 w-5`}
                />{' '}
                {open ? 'Dashboard RH' : ''}
            </div>

            <div className={li}>
                {' '}
                <RiFilePaper2Line
                    className={`${open ? 'mr-3' : ''} h-5 w-5`}
                />{' '}
                {open ? 'Folha de Pagamento' : ''}
            </div>

            <div className={li}>
                {' '}
                <FaUserAlt className={`${open ? 'mr-3' : ''} h-5 w-5`} />{' '}
                {open ? 'Prestadores' : ''}
            </div>

            <div className={li}>
                {' '}
                <FaRegFileAlt
                    className={`${open ? 'mr-3' : ''} h-5 w-5`}
                />{' '}
                {open ? 'Relatórios' : ''}
            </div>
        </div>
    );
}
