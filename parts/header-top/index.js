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
    const [total, setTotal] = useState(0);
    const closeCart = () => setShow(false);
    const showCart = () => {
        setShow(true);
        setTotal(Sum())
    }
    const Sum = () => {
        let res = products.map(a => a.total * parseFloat(a.price.slice(1))).reduce((a, b) => a + b, 0)
        return parseFloat(res.toFixed(2))
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
                            {
                                total > 0 && <>

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
                                    <Col>
                                        <div className="d-flex bg-info bg-opacity-50 p-3">
                                            <div className="me-5 pe-4">
                                                <p className="m-0 fw-bolder">Товары ({products.length}):</p>
                                                <p className="m-0 fw-bolder">Скидка:</p>
                                                <p className="m-0 fw-bolder">Доставка:</p>
                                                <p className="pt-3 fw-bolder fs-4">Итого:</p>
                                            </div>
                                            <div>
                                                <p className="text-end m-0 fw-bold">{total} $</p>
                                                <p className="text-end m-0 fw-bold">0.00 $</p>
                                                <p className="text-end m-0 fw-bold">1.00 $</p>
                                                <p className="text-end fw-bold pt-4">{total + 1.00} $</p>
                                            </div>
                                        </div>
                                    </Col></>
                            }{
                                total == 0 && <p className="fs-2 ms-5 ps-5 fw-bolder">Корзина покупок</p>
                            }
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeCart}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </nav >
    );
}
