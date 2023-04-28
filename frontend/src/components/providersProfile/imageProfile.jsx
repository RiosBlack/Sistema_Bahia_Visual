import Image from 'next/image';
import perfil from '../../assets/perfil.jpg';

export default function ImageProfile() {
    return (
        <>
            <div className="w-52 h-52 rounded-full bg-[#F3773B] flex justify-center items-center absolute">
                <Image
                    src={perfil}
                    alt="Picture of the author"
                    priority
                    className="w-48 h-48 rounded-full"
                />
            </div>
            <div className='h-24'></div>
            <div className=" bg-[#17112A] rounded-t-lg w-full h-32"></div>
        </>
    );
}
