import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { products as productsState } from "../../../../recoil/states/products"
import { useRecoilValue } from "recoil"
import styles from "../../../../styles/timeline.module.scss"
export default function Entry({ entry, slug }) {
    const products = useRecoilValue(productsState)
    const [show, setShow] = useState(false);
    const [productsInfo, setProductsInfo] = useState([])
    const [total, setTotal] = useState(0.0)
    const [productsIdTitle, setProductsIdTitle] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const InfoProducts = (prods) => {
        let info = [];
        let total = 0.0
        for (let i = 0; i < prods?.length; i++) {
            let title = productsIdTitle[prods[i].id]
            let quatity = prods[i].quatity
            let price = prods[i].price
            info = [...info, { title: title, quatity: quatity, price: price }]
            total += quatity * price
        };
        setTotal(total)
        setProductsInfo(info)
    }
    useEffect(() => {
        setProductsIdTitle(products.reduce((res, item) => {
            return {
                ...res,
                [item._id]: item.title
            }
        }, {}))
    }, [products])

    useEffect(() => {
        InfoProducts(entry.products)
    }, [productsIdTitle])
    return (
        <>
            <div className={slug % 2 == 1 ? `${styles.containerS} ${styles.right}` : `${styles.containerS} ${styles.left}`}>
                <div
                    className={`${styles['content-sale']} border border-2`}
                    onClick={() => handleShow()}
                >
                    <div className="d-flex mb-3">
                        <div>{entry.time}</div>
                        <div className="ms-auto">{entry.supplier}</div>
                    </div>
                    <div className="d-flex fw-bold">
                        <div> {productsInfo[0]?.title}{productsInfo.length >= 2 && ` and ${productsInfo.length - 1} orther products`}</div>
                        <div className="ms-auto">{total}$</div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{entry.time}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Time:{entry.time}</p>
                        <p>Supplier:{entry.supplier}</p>
                        <p>Address:{entry.address}</p>
                        <p>Phone:{entry.phone}</p>
                        <p>Mail:{entry.mail}</p>
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
                                        ([slug, { title, quatity, price }]) => <tr key={slug}>
                                            <td>{slug}</td>
                                            <td>{title}</td>
                                            <td>{quatity}</td>
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
