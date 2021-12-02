import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
import { useAppContext } from "../../context/index"
export default function Card(props) {
    const [state, setState] = useAppContext()
    const [isBuy, setIsBuy] = useState(false)
    const [total, setTotal] = useState(0)
    const Increase = () => {
        let i = state.products.findIndex(a => a?.name == props.name)
        if (i >= 0) {
            setState(prev => {
                return {
                    ...prev,
                    products: [
                        ...prev.products.slice(0, i),
                        { ...prev.products[i], total: prev.products[i].total + 1 },
                        ...prev.products.slice(i + 1)
                    ]
                }
            }
            )
        }
        else {
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
        setTotal(total + 1)
        setIsBuy(true)
    }

    const Decrease = () => {

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
            {!isBuy &&
                <Button variant="info" className={`${styles.size}`} onClick={() => Increase()}><i aria-hidden className="fas fa-cart-arrow-down me-1 "></i>Buy</Button>
            }
            {isBuy && <InputGroup className={`${styles.size} mb-3`}>
                <FormControl className="p-1 fs-4" value={total} />
                <div className="d-flex flex-column">
                    <Button variant="outline-secondary" id="button-addon2" className="pt-0 pb-0 ps-2 pe-2" onClick={() => Increase()}>
                        +
                    </Button>
                    <Button variant="outline-secondary" id="button-addon2" className="p-0">
                        -
                    </Button>
                </div>
            </InputGroup>}
        </div>

    </>
    );
}
