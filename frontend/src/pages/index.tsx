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
            <main className="w-screen h-screen grid md:flex p-2">
                <div className="w-1/2 grid justify-items-center content-center">
                    <Image
                        src={logo}
                        width={300}
                        height={300}
                        quality={100}
                        alt={'Logo da empresa Bahia Visual'}
                    />
                    <h1>Bem vindo ao sistema da Bahia Visual</h1>
                    <h2>
                        Você pode acessar o sistema ao lado com seu email e
                        senha cadastrado.
                    </h2>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <LoginFromComponent />
                </div>
            </main>
        </>
    );
}
