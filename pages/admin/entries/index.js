import React from "react";
import AdminLayout from "../../../layouts/adminLayout.js"
import Entry from "./entry/index.js"
import styles from "../../../styles/timeline.module.scss"
export default function Entries({ entries }) {
    entries.sort((a, b) => new Date(a.time) - new Date(b.time))
    return (
        <>
            <div className="entries row">
                <div className="col-12"></div>
                <div className="col-12">
                    <div className={`${styles.timeline}`}>
                        {
                            Object.entries(entries).map(
                                ([slug, { time, supplier, mail, phone, address, products }]) =>
                                    <Entry key={slug} time={time} supplier={supplier} mail={mail} phone={phone} address={address} products={products} slug={slug}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/entries')
    const entries = await res.json()
    if (!entries) {
        return {
            notFound: true,
        }
    }

    return {
        props: { entries }, // will be passed to the page component as props
    }
}
Entries.Layout = AdminLayout
