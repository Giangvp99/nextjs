import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
export default function Card(props) {
    const Buy = () => {
        props.setBadge(prev => prev + 1)
    }
    return (<>
        <div className={`${styles['card-product']} mb-3 border border-2 position-relative`}>
            <img src={props.img} className="card-img-top p-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-body ms-3 p-1 ">
                <div>Price: {props.price}</div>
            </div>
            <Button variant="info" onClick={() => Buy()}><i aria-hidden className="fas fa-cart-arrow-down me-1"></i>Buy</Button>{' '}
        </div>

    </>
    );
}

