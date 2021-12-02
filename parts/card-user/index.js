import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
import { useAppContext } from "../../context/index"
export default function Card(props) {
    const [state, setState] = useAppContext()
    const Buy = () => {
        let i = state.products.findIndex(a => a?.name == props.name)
        console.log(i)
        if (i >= 0)
            setState(prev => {
                return {
                    ...prev,
                    products: [
                        ...prev.products.slice(0, i),
                        { ...prev.products[i], total: prev.products[i].total + 1 },
                        ...prev.products.slice(i + 1)
                    ]
                }
            })
        else
            setState(prev => {
                return {
                    ...prev,
                    products: [
                        ...prev.products,
                        { name: props.name, img: props.img, price: props.price, total: 1 }
                    ]
                }
            })
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
