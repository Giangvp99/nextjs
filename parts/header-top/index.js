import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { cart as cartState } from "../../recoil/states/cart"
import { users as usersState, newUser } from "../../recoil/states/users"
import { Modal, Button, Badge, Image, Container, Row, Col, Alert } from "react-bootstrap";
import stylesC from "../../styles/card.module.scss"
import styles from "../../styles/header-top.module.scss"
export default function Top() {
    const cart = useRecoilValue(cartState)
    const badge = cart.length
    const users = useRecoilValue(usersState)
    const [user, setUser] = useState({})
    const setNewUser = useSetRecoilState(newUser)
    const [showC, setShowC] = useState(false);
    const [total, setTotal] = useState(0);
    const [showL, setShowL] = useState(false)
    const [active, setActive] = useState(true)
    const [hideU, setHideU] = useState("d-none")
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hideP, setHideP] = useState("d-none")
    const Login = (e) => {
        setHideU("d-none")
        setHideP("d-none")
        e.preventDefault();
        if (users.findIndex(a => a.username == username) != -1) {
            let index = users.findIndex(a => a.password == password)
            if (index != 1) {
                setUser({ username, password })
                setShowL(false)
            }
            else {
                setPasswordError("password error!")
                setHideP("")
            }
        }
        else {
            setUsernameError("username error!")
            setHideU("")
        }
    };
    const closeCart = () => setShowC(false);
    const closeLogin = () => setShowL(false);
    const showCart = () => {
        setShowC(true);
        setTotal(Sum())
    }
    const Registration = (e) => {
        setActive(true)
        e.preventDefault();
        setNewUser({ username: "a", password: "a" })
    }
    const Payment = () => {
        console.log("a")
    }
    const Sum = () => {
        let res = cart.map(a => a.total * parseFloat(a.price.slice(1))).reduce((a, b) => a + b, 0)
        return parseFloat(res.toFixed(2))
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0 ">
            <div className="container">
                <a className="navbar-brand fs-1 pe-5 me-5" href="#">
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
                {
                    JSON.stringify(user) === JSON.stringify({}) && <><Button variant="primary" size="sm" className="ms-4 w-auto" onClick={() => setShowL(true)}>Log in</Button>{' '}</>
                }{
                    JSON.stringify(user) !== JSON.stringify({}) && <Button variant="info" size="sm" className="ps-3 pe-3 ms-3">{user.username}</Button>
                }
            </div>
            <Modal show={showL} onHide={closeLogin} dialogClassName={stylesC.login}>
                <Modal.Header closeButton>
                    <Modal.Title><Button variant={`${active ? "info" : "transparent"}`} onClick={() => setActive(true)}>Login</Button></Modal.Title>
                    <Modal.Title className="text-secondary ms-2"><Button variant={`${active ? "transparent" : "info"}`} onClick={() => setActive(false)}>Registration</Button></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            {
                                active && <>
                                    <div className="col-lg-12 login-form">
                                        <div className={`col-lg-12 ${styles["login-form"]}`}>
                                            <form>
                                                <div className={`${styles["form-group"]}`}>
                                                    <label className={`${styles["form-control-label"]} me-2`}>USERNAME</label>
                                                    <input
                                                        type="text"
                                                        className={`${styles["form-control-login"]} ${styles.username}`}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                    <Alert variant="danger" className={`${hideU}`}>
                                                        {usernameError}
                                                    </Alert>
                                                </div>
                                                <div className={`${styles["form-group"]}`}>
                                                    <label className={`${styles["form-control-label"]} me-2`}>PASSWORD</label>
                                                    <input
                                                        type="password"
                                                        className={`${styles["form-control-login"]} ${styles.password}`}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <Alert variant="danger" className={`${hideP}`}>
                                                        {passwordError}
                                                    </Alert>
                                                </div>

                                                <div className={`col-lg-12 ${styles["login-button"]} d-flex`}>
                                                    <button
                                                        type="submit"
                                                        className={`btn ${styles["btn-outline-primary"]} ms-auto`}
                                                        onClick={(e) => Login(e)}
                                                    >
                                                        LOGIN
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                !active && <>
                                    <div className="col-lg-12 login-form">
                                        <div className={`col-lg-12 ${styles["login-form"]}`}>
                                            <form>
                                                <div className={`${styles["form-group"]}`}>
                                                    <label className={`${styles["form-control-label"]} me-2`}>USERNAME</label>
                                                    <input
                                                        type="text"
                                                        className={`${styles["form-control-login"]} ${styles.username}`}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                </div>
                                                <div className={`${styles["form-group"]}`}>
                                                    <label className={`${styles["form-control-label"]} me-2`}>PASSWORD</label>
                                                    <input
                                                        type="password"
                                                        className={`${styles["form-control-login"]} ${styles.password}`}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>

                                                <div className={`col-lg-12 ${styles["login-button"]} d-flex`}>
                                                    <button
                                                        type="submit"
                                                        className={`btn ${styles["btn-outline-primary"]} ms-auto`}
                                                        onClick={(e) => Registration(e)}
                                                    >
                                                        Registration
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </>

                            }
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeLogin}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

            <Modal show={showC} onHide={closeCart} dialogClassName={stylesC['modal-w']}>
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
                                            Object.entries(cart).map(([slug, { name, img, total, price }]) => {
                                                return (
                                                    <div className="d-flex" key={slug}>
                                                        <Image src={img} rounded className={`${styles.size} mb-3`} />
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
                                                <p className="m-0 fw-bolder">Товары ({cart.length}):</p>
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
                    <Button variant="info" onClick={Payment}>
                        Payment
                    </Button>
                    <Button variant="secondary" onClick={closeCart}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </nav >
    );
}
