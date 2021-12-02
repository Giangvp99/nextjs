import React from "react";
import Content from "../parts/content/index"
import HomeLayout from "../layouts/homeLayout"
export default function Home({ products }) {

    return (<>
        <HomeLayout>
            <Content products={products} />
        </HomeLayout>
    </>
    );
}

export async function getServerSideProps() {
    let res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    if (!products) {
        return {
            notFound: true,
        }
    }

    return {
        props: { products }, // will be passed to the page component as props
    }
}
