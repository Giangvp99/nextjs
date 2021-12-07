import Head from "next/head"
import SSRProvider from 'react-bootstrap/SSRProvider';
// import AppWrapper from "../context/index"
import { RecoilRoot } from "recoil"
import "./global.css"
export default function MyApp({ Component, pageProps }) {
    const EmptyLayout = ({ children }) => <>{children}</>
    const Layout = Component.Layout || EmptyLayout
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://kit.fontawesome.com/615000b101.js" crossOrigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></script>
        </Head>
        <Layout>
            <SSRProvider>
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            </SSRProvider>
        </Layout>
    </>
}

