import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
// import { useAppContext } from "../../context/index"
import { useRecoilState } from "recoil"
import { cart as cartState } from "../../recoil/states/cart"
export default function Card(props) {
    // const [state, setState] = useAppContext()
    const [cart, setCart] = useRecoilState(cartState)
    const [isBuy, setIsBuy] = useState(false)
    const [total, setTotal] = useState(0)
    const Increase = () => {
        let i = cart.findIndex(a => a?.name == props.name)
        if (i >= 0) {
            setCart([
                ...cart.slice(0, i),
                { ...cart[i], total: parseFloat(cart[i].total) + 1 },
                ...cart.slice(i + 1)
            ])
        }
        else {
            setCart([
                ...cart,
                { name: props.name, img: props.img, price: props.price, total: 1.0 }
            ])
        }
        setTotal(parseFloat(total) + 1)
        setIsBuy(true)
    }

    const Decrease = () => {
        let i = cart.findIndex(a => a?.name == props.name)
        if (total > 1) {
            setCart([
                ...cart.slice(0, i),
                { ...cart[i], total: parseFloat(cart[i].total) - 1 },
                ...cart.slice(i + 1)
            ])

            setTotal(parseFloat(total) - 1)
        }
        setIsBuy(true)
    }

    const ChangeTotal = (e) => {
        setTotal(e.target.value)
        let i = cart.findIndex(a => a?.name == props.name)
        setCart([
            ...cart.slice(0, i),
            { ...cart[i], total: parseFloat(e.target.value) },
            ...cart.slice(i + 1)
        ])
    }

    return (<>
        <div className={`${styles['card-users']} mb-3 border border-2 position-relative`}>
            <img src={props.img} className="card-img-top p-4" alt="..." />
            <div className="card-body p-0 ms-3">
                <h5 className={`${styles['card-title']}`}>{props.name}</h5>
            </div>
            <div className="card-body p-0 ms-3 d-flex align-items-center">
                <div>{props.price}</div>
                <div className="ms-auto me-3">{!isBuy &&
                    <Button variant="info" className={`${styles.size}`} onClick={() => Increase()}><i aria-hidden className="fas fa-cart-arrow-down me-1 "></i>Buy</Button>
                }
                    {isBuy && <InputGroup className={`${styles.size}`} >
                        <FormControl className="p-1 fs-4" value={total} onChange={e => ChangeTotal(e)} />
                        <div className="d-flex flex-column">
                            <Button variant="outline-secondary" id="button-addon2" className="pt-0 pb-0 ps-2 pe-2" onClick={() => Increase()}>
                                +
                            </Button>
                            <Button variant="outline-secondary" id="button-addon2" className="p-0" onClick={() => Decrease()}>
                                -
                            </Button>
                        </div>
                    </InputGroup>}
                </div>
            </div>
        </div>

    </>
    );
}
