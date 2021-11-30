import React, { useState } from "react";
import {Alert} from "react-bootstrap"
import styles from "../../styles/login.module.scss";

export default function Login({ users }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        if (users.findIndex(a => a.username == username) != -1) {
            if (users.findIndex(a => a.password == password) != -1) {
                console.log(true)
            }
            else
                setPasswordError("password error!")
        }
        else
            setUsernameError("username error!")
    };

    return (
        <div className={`container`}>
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className={`col-lg-6 col-md-8 ${styles["login-box"]}`}>
                    <div className={`col-lg-12 ${styles["login-key"]}`}>
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div className={`col-lg-12 ${styles["login-title"]}`}>ADMIN PANEL</div>

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
                                    <Alert variant="danger">
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
                                    <Alert variant="danger">
                                        {passwordError}
                                    </Alert>
                                </div>

                                <div className="col-lg-12 pb-3">
                                    <div className={`col-lg-12 ${styles["login-button"]}`}>
                                        <button
                                            type="submit"
                                            className={`btn ${styles["btn-outline-primary"]}`}
                                            onClick={(e) => handleInput(e)}
                                        >
                                            LOGIN
                                        </button>
                                    </div>
                                </div>
                            </form>
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
