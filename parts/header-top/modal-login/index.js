import React, { useState } from "react"
import { Modal, Button, Container, Row, Alert } from "react-bootstrap"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { users as usersState, newUser as newUserState } from "../../../recoil/states/users"
import { useRouter } from "next/router";
import stylesC from "../../../styles/card.module.scss"
import styles from "../../../styles/header-top.module.scss"
export default function ModalLogin({ showL,setShowL  ,setUser}) {
    const [active, setActive] = useState(true)
    const [hideU, setHideU] = useState("d-none")
    const [hideP, setHideP] = useState("d-none")
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const setNewUser = useSetRecoilState(newUserState)
    const users = useRecoilValue(usersState)
    const closeLogin = () => setShowL(false);
    const router = useRouter()
    const Login = (e) => {
        setHideU("d-none")
        setHideP("d-none")
        e.preventDefault();
        if (users.findIndex(a => a.username == username) != -1) {
            let index = users.findIndex(a => a.password == password)
            if (index != 1) {
                setUser({ username, password })
                if (username === "admin")
                    router.push("/admin")
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
    const Registration = (e) => {
        setActive(true)
        e.preventDefault();
        setNewUser({ username, password })
        setHideU("d-none")
        setHideU("d-none")
    }
    return <Modal show={showL} onHide={closeLogin} dialogClassName={stylesC.login}>
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

}
