import Head from "next/head"
import SSRProvider from 'react-bootstrap/SSRProvider';
import AppWrapper from "../store/index"
import "./global.css"
export default function MyApp({ Component, pageProps }) {
    const EmptyLayout = ({ children }) => <>{children}</>
    const Layout = Component.Layout || EmptyLayout
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
            <script src="https://kit.fontawesome.com/615000b101.js" crossorigin="anonymous"></script>
        </Head>
        <Layout>
            <SSRProvider>
                <AppWrapper>
                    <Component {...pageProps} />
                </AppWrapper>
            </SSRProvider>
        </Layout>
    </>
}

// import Head from "next/head"
// import SSRProvider from 'react-bootstrap/SSRProvider';
// import Store  from "../store/index"
// import "./global.css"
// 
// export default function MyApp({ Component, pageProps }) {
//     const EmptyLayout = ({ children }) => <>{children}</>
//     const Layout = Component.Layout || EmptyLayout
//     return <>
//         <Head>
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
//             <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
//             <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
//             <script src="https://kit.fontawesome.com/615000b101.js" crossorigin="anonymous"></script>
//         </Head>
//         <Layout>
//             <SSRProvider>
//                 <Store>
//                     <Component {...pageProps} />
//                 </Store>
//             </SSRProvider>
//         </Layout>
//     </>
// }
