import Head from 'next/head';
import LoginFromComponent from 'src/components/loginForm'

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
            <main>
                <LoginFromComponent />
            </main>
        </>
    );
}
