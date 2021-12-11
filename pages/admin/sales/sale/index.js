import React, { useState } from "react";
import { Modal, Button ,Table} from "react-bootstrap";
import styles from "../../../../styles/timeline.module.scss"
import stylesC from "../../../../styles/card.module.scss"
export default function Sale({ slug, time, title, name, phone, age, gender, mail, products }) {
    const [show, setShow] = useState(false);
    const [productsName, setProductsName] = useState([])
    const [total, setTotal] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        InfoProducts(products)
        setShow(true);
    }

    const InfoProducts = async (products) => {
        let names = [];
        let total = 0;
        for (const [key, value] of Object.entries(products)) {
            let res = await fetch(`http://localhost:3000/api/products/${key}`)
            let data = await res.json()
            names.push(data.name)

            total += parseFloat(data.price.slice(1)) * value
        }
        setProductsName(names)
        setTotal(total.toFixed(2))
    }
    return (
        <>
            <div className={slug % 2 == 1 ? `${styles.containerS} ${styles.right}` : `${styles.containerS} ${styles.left}`}>
                <div
                    className={`${styles['content-sale']} border border-2`}
                    onClick={() => handleShow()}
                >
                    <p className="fs-6">{time[0]+"-"+time[1]+"-"+time[2]+" "+time[3]+":"+time[4]+":"+time[5]}</p>
                    <span className="fs-4">{title}</span>
                </div>
                <Modal show={show} onHide={handleClose} dialogClassName={stylesC['modal-w']}>
                    <Modal.Header closeButton>
                        <Modal.Title>{time}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name:{name}</p>
                        <p>Phone:{phone}</p>
                        <p>Age:{age}</p>
                        <p>Gender:{gender}</p>
                        <p>Mail:{mail}</p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(productsName).map(
                                        ([slug, item]) => <tr key={slug}>
                                            <td>{slug}</td>
                                            <td>{item}</td>
                                        </tr>
                                    )
                                }
                                <tr>
                                    <td>Total</td>
                                    <td>{total}</td>
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
