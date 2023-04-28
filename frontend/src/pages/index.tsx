import Head from 'next/head';
import LoginFromComponent from 'src/components/loginForm';
import Image from 'next/image';
import logo from 'src/assets/logo.png';
import background from 'src/assets/backgroundLogin.jpg';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sistema Bahia Visual</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="w-screen h-screen grid md:flex p-2 bg-gradient-to-r from-yellow-100 via-slate-100 to-yellow-100">
                <div className="w-1/2 grid justify-items-center content-center  bg-natal bg-cover rounded-3xl">
                    <div className="grid justify-items-center content-center bg-yellow-100 bg-opacity-80 m-2 rounded-xl p-2">
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
                        <h2 className="text-sm text-gray-600 text-center font-sans">
                            Você pode acessar o sistema ao lado com seu email e
                            senha cadastrado.
                        </h2>
                    </div>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <LoginFromComponent />
                </div>
            </main>
        </>
    );
}
