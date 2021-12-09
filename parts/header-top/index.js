import React, { useState } from "react";
import { useRecoilValue } from "recoil"
import { cart as cartState } from "../../recoil/states/cart"
import { Button, Badge, } from "react-bootstrap";
import ModalLogin from "./modal-login/index"
import ModalCart from "./modal-cart/index"
export default function Top() {
    const cart = useRecoilValue(cartState)
    const badge = cart.length
    const [user, setUser] = useState({})
    const [showC, setShowC] = useState(false);
    const [showL, setShowL] = useState(false)
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
                <Button variant="warning" size="sm" className="position-relative" onClick={() => setShowC(true)}>
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
            <ModalLogin showL={showL} setShowL={setShowL} setUser={setUser} user={user}/>
            <ModalCart showC={showC} setShowC={setShowC} user={user}/>
        </nav >
    );
}
