import React from "react";
import Sale from "./sale/index.js"
import AdminLayout from "../../../layouts/adminLayout.js"
import styles from "../../../styles/timeline.module.scss"
export default function Sales({ sales }) {
    sales.sort((a, b) => new Date(...b.time) - new Date(...a.time))
    return (
        <>
            <div className="sales row">
                <div className="col-12"></div>
                <div className="col-12">
                    <div className={styles.timeline}>
                        {
                            Object.entries(sales).map(
                                ([slug, { time, title, name, phone, age, gender, mail, products }]) =>
                                    <Sale key={slug} time={time} title={title} name={name} phone={phone} age={age} gender={gender} mail={mail} products={products} slug={slug} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/sales')
    const sales = await res.json()
    if (!sales) {
        return {
            notFound: true,
        }
    }

    return {
        props: { sales }, // will be passed to the page component as props
    }
}
Sales.Layout = AdminLayout
