import React from "react";
import styles from "../../styles/admin-preview.module.scss";
import { Card, ProgressBar } from "react-bootstrap";

export default function Preview() {
    return (
        <>  <div className="d-flex justify-content-around">
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #45f7ad" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Orders</p>
                                <span className="fs-4">$1000.00</span>
                            </div>
                            <div className="col-3">aaa</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #45f7f4" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">Revenue</p>
                                <span className="fs-4">$1000.00</span>
                            </div>
                            <div className="col-3">aaa</div>
                        </div>
                    </Card.Body>{" "}
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #f745cb" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-10">
                                <div className="mb-0">Tasks</div>
                                <div className="d-flex flex-row align-items-center">
                                    <span className="fs-4">50%</span><ProgressBar now={50} /></div>
                            </div>
                            <div className="col-2 p-0">aa</div>
                        </div>
                    </Card.Body>{" "}
                </Card>
            </div>
            <div className={styles.card}>
                <Card style={{ borderLeft: "5px solid #f7d445" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-9">
                                <p className="mb-0">aaaaaaaaaa</p>
                                <span className="fs-4">$1000.00</span>
                            </div>
                            <div className="col-3">aaa</div>
                        </div>
                    </Card.Body>{" "}
                </Card>
            </div>
            </div>
        </>
    );
}
