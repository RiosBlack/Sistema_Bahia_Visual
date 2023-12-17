import FormLogin from "@/components/system/formLogin";
import Image from "next/image";
import logo from 'public/logo.png';

export default function SystemPage() {
	return (
		<div className="flex w-full h-full items-center justify-center">
			<div className="w-1/2 h-full grid justify-items-center content-center bg-white bg-cover rounded-3xl">
				<video autoPlay loop muted about="video background" className="h-full relative rounded-xl overflow-hidden" >
					<source src="/snowBackground.mp4" type="video/mp4" />
				</video>
				<div className="grid absolute top-48 justify-items-center content-center bg-yellow-100 bg-opacity-80 m-2 rounded-xl p-2">
					<Image
						src={logo}
						width={300}
						height={300}
						quality={100}
						alt={'Logo da empresa Bahia Visual'}
						className="pt-5"
					/>
					<h1 className="text-xl font-bold font-sans text-[#D7334E] mt-5 mb-1">
						Bem vindo ao sistema da Bahia Visual
					</h1>
					<p className="text-sm text-gray-600 text-center font-sans">
						Você pode acessar o sistema ao lado com seu email e
						senha cadastrado.
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center w-1/2">
				<FormLogin />
			</div>
		</div>
	);
}
