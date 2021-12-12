import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Container, Row, Col, Table } from "react-bootstrap"
import { useSetRecoilState } from 'recoil'
import { addEntry as addEntryState } from '../../../recoil/states/entries'
import { products as productsState } from "../../../recoil/states/products"
import { useRecoilValue } from "recoil"

import styles from "../../../styles/card.module.scss"
export default function ModalNew({
    show,
    handleClose,
}) {
    const products = useRecoilValue(productsState)
    const [productsIdTitle, setProductsIdTitle] = useState([])
    const AddEntry = useSetRecoilState(addEntryState)
    const [row, setRow] = useState(1)
    const [entry, setEntry] = useState({
        time: "",
        supplier: "",
        mail: "",
        phone: "",
        address: "",
        products: []
    })
    const Hide = () => {
        console.log(entry)
        handleClose()
        setRow(1)
    }
    const handleSave = () => {
        setEntry(prev => {
            return {
                ...prev,
                time: "22"
            }
        })
        AddEntry(entry)
        handleClose()
    }
    useEffect(() => {
        setProductsIdTitle(products.reduce((res, item) => {
            return {
                ...res,
                [item._id]: item.title
            }
        }, {}))
    }, [products])
    return (
        <Modal show={show} onHide={Hide} dialogClassName={styles['modal-w']} >
            <Modal.Header closeButton>
                <Modal.Title>New Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Container>
                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Supplier:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setEntry(prev => { return { ...prev, supplier: e.target.value } });
                                }}
                            /></Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Mail:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setEntry(prev => { return { ...prev, mail: e.target.value } });
                                }}
                            /></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                                <Form.Label>Phone:</Form.Label></Col>
                            <Col xs={9}>
                                <Form.Control
                                    as="input"
                                    onChange={(e) => {
                                        setEntry(prev => { return { ...prev, phone: e.target.value } });
                                    }}
                                /></Col></Row>
                        <Row className="mb-3"><Col xs={3}>
                            <Form.Label>Address:</Form.Label></Col>
                            <Col xs={9}>
                                <Form.Control
                                    as="input"
                                    onChange={(e) => {
                                        setEntry(prev => { return { ...prev, address: e.target.value } });
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3"><Col xs={3}>
                            <Form.Label>Products:</Form.Label></Col>
                            <Col xs={9}>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [...Array(row).keys()].map((slug) => {
                                                return (
                                                    <tr key={slug}>
                                                        <td >
                                                            <Form.Select aria-label="Default select example" onChange={(e) => {
                                                                setEntry(prev => {
                                                                    return {
                                                                        ...prev, products: [...prev.products, { [e.target.value]: 0 }]
                                                                    }
                                                                })
                                                            }}>
                                                                {
                                                                    Object.entries(productsIdTitle).map(([k, v]) => <option value={k} key={k}>{v}</option>)
                                                                }
                                                            </Form.Select>
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                as="input"
                                                                onChange={(e) => {
                                                                    setEntry(prev => { return { ...prev, address: e.target.value } });
                                                                }}
                                                            />
                                                        </td>
                                                        <td className="d-flex">
                                                            {
                                                                slug == row - 1 && <Button variant="primary" className="m-auto" onClick={() => setRow(prev => prev + 1)}>New</Button>
                                                            }
                                                            {
                                                                slug != row - 1 && <Button variant="danger" onClick={() => setRow(prev => prev - 1)}>Delete</Button>
                                                            }
                                                        </td>

                                                    </tr>)
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleSave()}>
                    Save
                </Button>
                <Button variant="secondary" onClick={() => Hide()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
