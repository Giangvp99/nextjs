import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/adminLayout.js"
import Entry from "./entry/index.js"
import { Button } from "react-bootstrap"
import styles from "../../../styles/timeline.module.scss"
import { entries as entriesState } from "../../../recoil/states/entries"
import { products as productsState } from "../../../recoil/states/products"
import { useRecoilState, useSetRecoilState } from "recoil";
import ModalNew from "../../../parts/entries/modal/new"
export default function Entries({ dataE, dataP }) {
    const [entries, setEntries] = useRecoilState(entriesState)
    const setProducts = useSetRecoilState(productsState)
    const [showN, setShowN] = useState(false)
    const handleCloseN=()=>{
        setShowN(false)
    }
    useEffect(() => {
        setEntries(
            (dataE ? [...dataE] : []).sort((a, b) => new Date(a.time) - new Date(b.time))
        )
        setProducts(dataP)
    }, [])
    return (
        <>
            <div className="entries row">
                <div className="col-12 d-flex mb-2">
                    <Button variant="info" className="ms-auto" onClick={() => setShowN(true)}>New</Button>
                </div>
                <div className="col-12">
                    <div className={`${styles.timeline}`}>
                        {
                            Object.entries(entries).map(
                                ([slug, entry]) =>
                                    <Entry key={slug} entry={entry} slug={slug} />
                            )
                        }
                    </div>
                </div>
            </div>
            <ModalNew show={showN} handleClose={handleCloseN} />
        </>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/entries')
    const dataE = await res.json()
    res = await fetch('http://localhost:3000/api/products')
    const dataP = await res.json()
    if (!dataE || !dataP) {
        return {
            notFound: true,
        }
    }

    return {
        props: { dataE, dataP }, // will be passed to the page component as props
    }
}
Entries.Layout = AdminLayout
