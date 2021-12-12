import React, { useEffect, useState } from "react";
import styles from "../../../styles/admin-preview.module.scss";
import { Card, ProgressBar } from "react-bootstrap";
import { sales as salesState } from "../../../recoil/states/sales"
import { products as productsState } from "../../../recoil/states/products"
import { entries as entriesState } from "../../../recoil/states/entries"
import { useRecoilValue } from "recoil";
export default function Preview() {
    const sales = useRecoilValue(salesState)
    const products = useRecoilValue(productsState)
    const entries = useRecoilValue(entriesState)
    const [productsIdPrice, setProductsIdPrice] = useState({})
    const [info, setInfo] = useState({
        orders: 0,
        revenue: 0,
        expense: 0,
        profit: 0
    })
    const Revenue = () => {
        return Object.entries(sales).reduce((res, [slug, item]) => {
            res += Object.entries(item.products).reduce((res2, [id, num]) => {
                return res2 += productsIdPrice[id] * num
            }, 0)
            return res
        }, 0)
    }
    const Expense = () => {
        return Object.entries(entries ? entries : []).reduce((res, [slug, item]) => {
            res += Object.entries(item.products).reduce((res2, [slug, item2]) => {
                return res2 += item2.price * item2.quatity
            }, 0)
            return res
        }, 0)

    }
    useEffect(() => {
        setProductsIdPrice(products.reduce((res, item) => {
            return {
                ...res,
                [item._id]: item.price
            }
        }, {}))
    }, [products])
    useEffect(() => {
        let rev = Revenue();
        let exp = Expense()
        setInfo(prev => {
            return {
                ...prev,
                orders: sales.length,
                revenue: rev,
                expense: exp,
                profit: rev - exp
            }
        })
    }, [sales, productsIdPrice, entries])
    return (
        <>  <div className="d-flex justify-content-around">
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #45f7ad" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Orders</p>
                                <span className="fs-4">{info.orders}</span>
                            </div>
                            <div className="col-3">aaa</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #45f7f4" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Revenue</p>
                                <span className="fs-4">{info.revenue ? info.revenue : "..."}</span>
                            </div>
                            <div className="col-3">aaa</div>
                        </div>
                    </Card.Body>{" "}
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #f745cb" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Expense</p>
                                <span className="fs-4">{info.expense ? info.expense : "..."}</span>
                            </div>
                            <div className="col-3">aaa</div>

                        </div>
                    </Card.Body>{" "}
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #f7d445" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Profit</p>
                                <span className="fs-4">{info.profit ? info.profit : "..."}</span>
                            </div>
                            <div className="col-3">aaa</div>

                        </div>                    </Card.Body>{" "}
                </Card>
            </div>
        </div>
        </>
    );
}

// <div className="col-10">
//                                 <div className="mb-0">Tasks</div>
//                                 <div className="d-flex flex-row align-items-center">
//                                     <span className="fs-4">{info.task}%</span><ProgressBar now={50} /></div>
//                             </div>
// 
