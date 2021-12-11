import React from 'react'
import { Modal, Form, Button, Container, Row, Col } from "react-bootstrap"
import styles from "../../../styles/card.module.scss"
export default function ModalUpdate({
    show,
    handleClose,
    handleSave,
    product,
    countries,
    setTextarea
}) {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName={styles['modal-w']}>
            <Modal.Header closeButton>
                <Modal.Title>{product?.title}</Modal.Title>
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
                        <Col xs={3}><Form.Label>Модель:</Form.Label></Col>
                        <Col xs={9}><Form.Control
                            as="input"
                            value={product.model}
                            onChange={(e) => {
                                setTextarea(e.target.value);
                            }}
                        /></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                        <Form.Label>Цвет:</Form.Label></Col>
                        <Col xs={9}>
                        <Form.Control
                            as="input"
                            value={product.color}
                            onChange={(e) => {
                                setTextarea(e.target.value);
                            }}
                        /></Col></Row>
                        <Row className="mb-3"><Col xs={3}>
                        <Form.Label>Price:</Form.Label></Col>
                        <Col xs={9}>
                        <Form.Control
                            as="input"
                            value={product.price}
                            onChange={(e) => {
                                setTextarea(e.target.value);
                            }}
                        /></Col></Row>
                        <Row><Col xs={3}>
                        <Form.Label>Производитель:</Form.Label></Col>
                        <Col xs={9}>
                        <Form.Select aria-label="select country">
                            <option>{product?.country}</option>
                            {
                                Object.entries(countries).map(
                                    ([slug, { country }]) => <option key={slug} value={slug}>{country}</option>
                                )
                            }
                        </Form.Select>
                        </Col></Row>
                    </Container>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
