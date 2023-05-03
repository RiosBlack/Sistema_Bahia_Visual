import Image from 'next/image';
import perfil from '../../assets/perfil.jpg';
import { useState, useEffect } from 'react';

export default function ImageProfile() {
    return (
        <div className="w-full flex justify-center bg-[#17112A] rounded-t-lg">
            <div className="w-52 h-52 my-2 rounded-full bg-[#F3773B] flex justify-center items-center">
                <Image
                    src={perfil}
                    alt="Picture of the author"
                    priority
                    className="w-48 h-48 rounded-full"
                />
            </div>
        </div>
    );
}
