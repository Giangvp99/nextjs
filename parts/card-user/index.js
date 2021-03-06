import React, { useEffect, useState } from "react";
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
                { _id: props._id, name: props.name, image: props.image, price: props.price, total: 1.0 }
            ])
        }
        setTotal(parseFloat(total) + 1)
        setIsBuy(true)
    }

    const Decrease = () => {
        let i = cart.findIndex(a => a?.name == props.name)
        setTotal(parseFloat(total) - 1)
        if (total > 1) {
            setCart([
                ...cart.slice(0, i),
                { ...cart[i], total: parseFloat(cart[i].total) - 1 },
                ...cart.slice(i + 1)
            ])

            setIsBuy(true)
        }
        else {
            setCart([
                ...cart.slice(0, i),
                ...cart.slice(i + 1)
            ])
            setIsBuy(false)
        }
    }

    const ChangeTotal = (e) => {
        console.log("a")
        setTotal(e.target.value)
        let i = cart.findIndex(a => a?.name == props.name)
        setCart([
            ...cart.slice(0, i),
            { ...cart[i], total: parseFloat(e.target.value) },
            ...cart.slice(i + 1)
        ])
    }
    useEffect(() => {
        if (cart == 0) {
            setIsBuy(false)
            setTotal(0)
        }
    }, [cart])
    return (<>
        <div className={`${styles['card-users']} mb-3 border border-2 position-relative bg-white`}>
            <img src={props.image} className="card-img-top p-4" alt="..." />
            <div className="card-body p-0 ms-3">
                <h5 className={`${styles['card-title']}`}>{props.name}</h5>
            </div>
            <div className="card-body p-0 ms-3 d-flex align-items-center">
                <div className="fs-4 text-danger fst-italic">{props.price}$</div>
                <div className="ms-auto me-3">
                    {!isBuy &&
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
