import React, { useState } from "react"
import { Modal, Button, Container, Row, Form, Col, Alert } from "react-bootstrap"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { users as usersState, newUser as newUserState } from "../../../../recoil/states/users"
import { useRouter } from "next/router";
import stylesC from "../../../../styles/card.module.scss"
// import styles from "../../../styles/header-top.module.scss"
export default function ModalLogin({ showL, setShowL, setUser }) {
    const [active, setActive] = useState(true)
    const [hide, setHide] = useState("d-none")
    const [errors, setErrors] = useState({ username: "", password: "" })
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [vpassword, setVPassword] = useState("");
    const setNewUser = useSetRecoilState(newUserState)
    const users = useRecoilValue(usersState)
    const closeLogin = () => setShowL(false);
    const router = useRouter()
    const [validated, setValidated] = useState(false);

    const Login = (e) => {
        setErrors({ username: "", password: "" })
        e.preventDefault();
        if (users.findIndex(a => a.username === username) != -1) {
            let index = users.findIndex(a => a.password === password)
            if (index != -1) {
                setUser({ username, password })
                if (username === "admin")
                    router.push("/admin")
                setShowL(false)
            }
            else {
                setErrors(prev => { return { ...prev, password: "Error password" } })
                setHide("")
            }
        }
        else {
            setErrors(prev => { return { ...prev, username: "Error username" } })
            setHide("")
        }
    };
    const Registration = (e) => {
        e.preventDefault();
        if (password === vpassword) {
            setActive(true)
            setNewUser({ username, password })
            setHide("d-none")
            setErrors({ username: "", password: "" })
        }
    }
    return <Modal show={showL} onHide={closeLogin} dialogClassName={stylesC.login}>
        <Modal.Header closeButton>
            <Modal.Title><Button variant={`${active ? "info" : "transparent"}`} onClick={() => setActive(true)}>Login</Button></Modal.Title>
            <Modal.Title className="text-secondary ms-2"><Button variant={`${active ? "transparent" : "info"}`} onClick={() => { setActive(false); setUsername(""); setPassword("") }}>Registration</Button></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    {
                        active && <>
                            <div className="col-lg-12 login-form">
                                <div className={`col-lg-12`}>
                                    <Alert variant="danger" className={`${hide}`}>{errors.username != "" && "Username not exits"}{errors.password != "" && "Password error"}</Alert>
                                    <Form noValidate validated={validated} onSubmit={Login}>
                                        <Form.Group as={Col} md="4" controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                isInvalid={errors.username !== ""}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                required
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                isInvalid={errors.password !== ""}
                                            />
                                        </Form.Group>
                                        <Button type="submit" className="mt-3">Login</Button>
                                    </Form>
                                </div>
                            </div>
                        </>
                    }
                    {
                        !active && <>
                            <div className="col-lg-12 login-form">
                                <div className={`col-lg-12`}>
                                    <Form noValidate validated={validated} onSubmit={e => Registration(e)}>
                                        <Form.Group as={Col} md="4" controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                required
                                                type="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="verify_password">
                                            <Form.Label>Verify Password</Form.Label>
                                            <Form.Control
                                                required
                                                type="password"
                                                onChange={(e) => setVPassword(e.target.value)}
                                                isValid={password == vpassword}
                                                isInvalid={password != vpassword}
                                            />
                                        </Form.Group>
                                        <Button type="submit" className="mt-3">Registration</Button>
                                    </Form>
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

}
