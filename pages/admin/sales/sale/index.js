import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import styles from "../../../../styles/timeline.module.scss"
import stylesC from "../../../../styles/card.module.scss"
export default function Sale({ slug, sale }) {
    const { time, title, name, phone, age, mail, products } = sale
    const [show, setShow] = useState(false);
    const [productsInfo, setProductsInfo] = useState([])
    const [total, setTotal] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const InfoProducts = async (products) => {
        let info = [];
        let total = 0.0;
        for (const [key, value] of Object.entries(products)) {
            let res = await fetch(`http://localhost:3000/api/products/${key}`)
            let data = await res.json()
            info = [...info, { title: data.title, price: data.price, amount: value }]
            total += parseFloat(data.price) * value
        }
        setProductsInfo(info)
        setTotal(total.toFixed(2))
    }
    useEffect(() => {
        InfoProducts(products)
    }, [])
    return (
        <>
            <div className={slug % 2 == 1 ? `${styles.containerS} ${styles.right}` : `${styles.containerS} ${styles.left}`}>
                <div
                    className={`${styles['content-sale']} border border-2`}
                    onClick={() => handleShow()}
                >
                    <p className="fs-6">{time[0] + "-" + time[1] + "-" + time[2] + " " + time[3] + ":" + time[4] + ":" + time[5]}</p>
                    <div className="fw-bold">{productsInfo[0]?.title}{productsInfo.length >= 2 && ` and ${productsInfo.length - 1} orther products`}</div>
                </div>
                <Modal show={show} onHide={handleClose} dialogClassName={stylesC['modal-w']}>
                    <Modal.Header closeButton>
                        <Modal.Title>{time}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name:{name}</p>
                        <p>Phone:{phone}</p>
                        <p>Age:{age}</p>
                        <p>Mail:{mail}</p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(productsInfo).map(
                                        ([slug, { title, amount, price }]) => <tr key={slug}>
                                            <td>{slug}</td>
                                            <td>{title}</td>
                                            <td>{amount}</td>
                                            <td>{price}</td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td colSpan={2} className="text-center">Total</td>
                                    <td colSpan={2} className="text-center">{total}</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}
