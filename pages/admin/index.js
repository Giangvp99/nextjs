import React, { useEffect } from "react";
import AdminLayout from "../../layouts/adminLayout.js"
import Preview from "../../parts/admin/preview/index.js"
import Graph from "../../parts/admin/graph/index.js"
import Latest_Transaction from "../../parts/admin/lastest-trans/index.js"
import { sales as salesState } from "../../recoil/states/sales"
import { products as productsState } from "../../recoil/states/products"
import { entries as entriesState } from "../../recoil/states/entries"
import { useSetRecoilState } from "recoil";
export default function Dashboard({ dataS, dataP, dataE }) {
    const setSales = useSetRecoilState(salesState)
    const setProducts = useSetRecoilState(productsState)
    const setEntries = useSetRecoilState(entriesState)
    useEffect(() => {
        setSales(dataS)
        setProducts(dataP)
        setEntries(dataE)
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12 pb-5 border-bottom border-2"><p className="fs-3">This month</p><Preview /></div>
                <div className="col-12 graph mt-5 pb-5 border-bottom border-2"><Graph /></div>
                <div className="col-12 mt-5"><Latest_Transaction /></div>
            </div>
        </>
    );
}
export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/sales')
    const dataS = await res.json()
    res = await fetch('http://localhost:3000/api/products')
    const dataP = await res.json()
    res = await fetch('http://localhost:3000/api/entries')
    const dataE = await res.json()

    if (!dataS || !dataP || !dataE) {
        return {
            notFound: true,
        }
    }

    return {
        props: { dataS, dataP, dataE }, // will be passed to the page component as props
    }
}
Dashboard.Layout = AdminLayout
