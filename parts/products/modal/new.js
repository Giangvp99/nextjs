import React, { useState } from 'react'
import { Modal, Form, Button, Container, Row, Col } from "react-bootstrap"
import { useSetRecoilState } from 'recoil'
import { addProduct as addProductState } from '../../../recoil/states/products'
import styles from "../../../styles/card.module.scss"
export default function ModalNew({
    show,
    handleClose,
    countries,
}) {
    const AddProduct = useSetRecoilState(addProductState)
    const [product, setProduct] = useState({
        image: "",
        title: "",
        price: "",
        amount: "",
        color: "",
        material: "",
        country: "",
        model: "",
        type: "",
        name: ""
    })
    const handleSave = () => {
        AddProduct(product)
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose} dialogClassName={styles['modal-w']}>
            <Modal.Header closeButton>
                <Modal.Title>New Tkani</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Container>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Row>
                                <Col xs={3} className="p-auto"><Form.Label>Image</Form.Label></Col>
                                <Col xs={9}><Form.Control type="file" /></Col>
                            </Row>
                        </Form.Group>
                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Title:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setProduct(prev => { return { ...prev, title: e.target.value } });
                                }}
                            /></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Amount:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setProduct(prev => { return { ...prev, amount: e.target.value } });
                                }}
                            /></Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Модель:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setProduct(prev => { return { ...prev, model: e.target.value } });
                                }}
                            /></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                                <Form.Label>Цвет:</Form.Label></Col>
                            <Col xs={9}>
                                <Form.Control
                                    as="input"
                                    onChange={(e) => {
                                        setProduct(prev => { return { ...prev, color: e.target.value } });
                                    }}
                                /></Col></Row>
                        <Row className="mb-3"><Col xs={3}>
                            <Form.Label>Price:</Form.Label></Col>
                            <Col xs={9}>
                                <Form.Control
                                    as="input"
                                    onChange={(e) => {
                                        setProduct(prev => { return { ...prev, price: e.target.value } });
                                    }}
                                /></Col></Row>
                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Type:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setProduct(prev => { return { ...prev, type: e.target.value } });
                                }}
                            /></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}><Form.Label>Name:</Form.Label></Col>
                            <Col xs={9}><Form.Control
                                as="input"
                                onChange={(e) => {
                                    setProduct(prev => { return { ...prev, name: e.target.value } });
                                }}
                            /></Col>
                        </Row>
                        <Row className="mb-3"><Col xs={3}>
                            <Form.Label>Производитель:</Form.Label></Col>
                            <Col xs={9}>
                                <Form.Select aria-label="select country"
                                    onChange={(e) => {
                                        setProduct(prev => { return { ...prev, country: countries[e.target.value] } })
                                    }}>
                                    {
                                        Object.entries(countries).map(
                                            ([slug, { country }]) => <option key={slug} value={slug}>{country}</option>
                                        )
                                    }
                                </Form.Select>
                            </Col></Row>
                        <Row>
                            <Col xs={3}>
                                <Form.Label>Material:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    as="input"
                                    onChange={(e) => {
                                        setProduct(prev => { return { ...prev, material: e.target.value } });
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleSave()}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
