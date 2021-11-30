import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
export default function Card(props) {
    return (<>
        <div className={`${styles['card-product']} mb-3 border border-2 position-relative`}>
            <img src={props.img} className="card-img-top p-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-body ms-3 p-1 ">
                <div>Price: {props.price}</div>
                <div>SL:    {props.quatity}</div>
            </div>
            <div className="card-body position-absolute bottom-0 start-50 translate-middle-x w-100 mb-1 ms-3">
                <Button className="me-1 p-1" variant="primary" onClick={() => props.Detail(props._id)}>
                    Detail
                </Button>

                <button
                    type="button"
                    className="btn btn-danger me-1 p-1"
                    onClick={() => props.Delete(props._id)}
                >
                    Delete
                </button>
                <Button variant="warning p-1" onClick={() => props.Update(props._id)}>
                    Update
                </Button>
            </div>
        </div>

    </>
    );
}

