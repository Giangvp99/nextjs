import React from "react";
import { Button } from "react-bootstrap"
export default function Top() {
    const Login = () => {
        console.log("a")
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className="container-fluid">
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
                    <Button variant="primary" size="sm" className="w-auto" onClick={() => Login()}>Log in</Button>{' '}
                </div>
            </nav>
        </div>
    );
}
