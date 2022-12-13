import Head from 'next/head';
import CustomNavbar from '../src/CustomNavbar';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                <title>React App</title>
            </Head>
            <main>
                <CustomNavbar />
                <Component {...pageProps} />
            </main>
        </div>
    )
}
