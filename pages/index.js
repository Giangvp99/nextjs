import React, { useEffect } from "react";
import Content from "../parts/content/index"
import HomeLayout from "../layouts/homeLayout"
import { useSetRecoilState } from "recoil"
import { users as usersState } from "../recoil/states/users"
import { products as productsState } from "../recoil/states/products"
export default function Home({ products, users }) {
    const setUsers = useSetRecoilState(usersState)
    const setProducts = useSetRecoilState(productsState)
    useEffect(() => {
        setUsers(users);
        setProducts(products)
    }, [])
    return (<>
        <HomeLayout>
            <Content />
        </HomeLayout>
    </>
    );
}

export async function getServerSideProps() {
    let res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()
    res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
    if (!products || !users) {
        return {
            notFound: true,
        }
    }

    return {
        props: { products, users }, // will be passed to the page component as props
    }
}
