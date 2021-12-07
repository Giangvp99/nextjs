import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Alert } from "react-bootstrap"
import styles from "../../styles/login.module.scss";

export default function Login({ users }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hideU, setHideU] = useState("d-none")
    const [hideP, setHideP] = useState("d-none")
    const router = useRouter()

    const handleInput = (e) => {
        setHideU("d-none")
        setHideP("d-none")
        e.preventDefault();
        if (users.findIndex(a => a.username == username) != -1) {
            let index = users.findIndex(a => a.password == password)
            if (index != 1) {
                router.push("/admin")
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
        e.preventDefault();
        console.log("hi")
    }
    return (
        <div className={`container`}>
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className={`col-lg-6 col-md-8 ${styles["login-box"]} pt-5`}>
                    <div className="nav nav-tabs d-flex justify-content-center border-0 mb-5 pb-5 " id="nav-tab" role="tablist">
                        <button className="nav-link active ps-5 pe-5 bg-secondary border-0 text-light" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
                        <button className="nav-link ps-5 pe-5 bg-secondary border-0 text-light" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#registration" type="button" role="tab" aria-controls="registration" aria-selected="false">Registration</button>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className={`col-lg-12 ${styles["login-title"]}`}>Login</div>

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
                                                onClick={(e) => handleInput(e)}
                                            >
                                                LOGIN
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="registration" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className={`col-lg-12 ${styles["login-title"]}`}>Registration</div>

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

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()

    if (!users) {
        return {
            notFound: true,
        }
    }

    return {
        props: { users, }, // will be passed to the page component as props
    }
}
