import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import styles from "../../../../styles/timeline.module.scss"
export default function Entry({ time, supplier, mail, phone, address, products, slug }) {
    const [show, setShow] = useState(false);
    const [productsName, setProductsName] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
        InfoProducts(products)
        setShow(true);
    }

    const InfoProducts = async (products) => {
        let names = [];
        for (let i = 0; i < products?.length; i++) {
            let res = await fetch(`http://localhost:3000/api/products/${products[i].id}`)
            let data = await res.json()
            names.push(data.name)
        };
        setProductsName(names)
    }
    return (
        <>
            <div className={slug % 2 == 1 ? `${styles.containerS} ${styles.right}` : `${styles.containerS} ${styles.left}`}>
                <div
                    className={`${styles['content-sale']} border border-2`}
                    onClick={() => handleShow()}
                >
                    <p>{time}</p>
                    <p>{supplier}</p>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{time}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Time:{time}</p>
                        <p>Supplier:{supplier}</p>
                        <p>Address:{address}</p>
                        <p>Phone:{phone}</p>
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
