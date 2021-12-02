import React, { useState } from "react";
import { useRouter } from "next/router"
import { useAppContext } from "../../context/index";
import { Modal, Button, Badge, Image, Container, Row, Col } from "react-bootstrap";
import stylesC from "../../styles/card.module.scss"
import styles from "../../styles/header-top.module.scss"
export default function Top() {
    const products = useAppContext()[0].products
    const badge = products.map(a => a.total).reduce((a, b) => a + b, 0)
    const router = useRouter()
    const Login = () => {
        router.push("/login")
    }
    const [show, setShow] = useState(false);
    const closeCart = () => setShow(false);
    const showCart = () => {
        setShow(true);
    }
    const sum = () => {
        let res = products.map(a => a.total * a.price).reduce((a, b) => a + b, 0)
        console.log(res)
        return res

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container">
                <a className="navbar-brand fs-3" href="#">
                    Tkani
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                О магазине
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Система скидок
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Гарантия и возврат
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Оптовикам
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Блог
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
                <Button variant="warning" size="sm" className="position-relative" onClick={() => showCart()}>
                    <i aria-hidden className="fas fa-shopping-cart pe-2 ps-2"></i>
                    <Badge bg="secondary" className="position-absolute top-0 start-100 translate-middle">{badge != 0 ? badge : ""}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>{' '}
                <Button variant="primary" size="sm" className="ms-4 w-auto" onClick={() => Login()}>Log in</Button>{' '}
            </div>
            <Modal show={show} onHide={closeCart} dialogClassName={stylesC['modal-w']}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={8}>
                                {
                                    Object.entries(products).map(([slug, { name, img, total, price }]) => {
                                        return (
                                            <div className="d-flex">
                                                <Image key={slug} src={img} rounded className={`${styles.size} mb-3`} />
                                                <div>
                                                    <p className="ps-3 fs-4">{name}</p>
                                                    <p className="ps-3 fs-5">количество: {total}</p>
                                                    <p className="ps-3 fs-5">Price: {price}</p>
                                                </div>
                                            </div>)
                                    })
                                }
                            </Col>
                            <Col className="d-flex">
                                <div>
                                    <p className="m-0 fw-bold">Товары ({products.length}):</p>
                                    <p className="m-0 fw-bold">Скидка:</p>
                                    <p className="m-0 fw-bold">Доставка:</p>
                                    <p className="pt-3 fw-bold fs-4">Итого:</p>
                                </div>
                                <div>
                                    <p>{sum}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeCart}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </nav>
    );
}
