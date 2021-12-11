import React, { useEffect, useState } from "react"
import { Modal, Container, Row, Col, InputGroup, FormControl, Button, Image } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { cart as cartState } from "../../../../recoil/states/cart"
import stylesC from "../../../../styles/card.module.scss"
import styles from "../../../../styles/header-top.module.scss"

export default function ModalCart({ showC, setShowC, user }) {
    const cart = useRecoilValue(cartState)
    const [total, setTotal] = useState(0);
    const [openInfo, setOpenInfo] = useState("d-none")

    const closeCart = () => {
        setShowC(false);
        setOpenInfo("d-none")
    }
    const Continue = () => {
        if (JSON.stringify(user) === JSON.stringify({}))
            setOpenInfo("")
    }
    const Payment = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, cart })
        };
        let res = await fetch('http://localhost:3000/api/sales/new', requestOptions)
        const sale = await res.json()
        console.log(sale)
    }
    const Sum = () => {
        let res = cart.map(a => a.total * parseFloat(a.price.slice(1))).reduce((a, b) => a + b, 0)
        return parseFloat(res.toFixed(2))
    }
    useEffect(() => {
        setTotal(Sum())
    }, [cart])
    return <Modal show={showC} onHide={closeCart} dialogClassName={stylesC['modal-w']}>
        <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    {
                        total > 0 && <>

                            <Col xs={8}>
                                {
                                    Object.entries(cart).map(([slug, { name, img, total, price }]) => {
                                        return (
                                            <div className="d-flex" key={slug}>
                                                <Image src={img} rounded className={`${styles.size} mb-3`} />
                                                <div>
                                                    <p className="ps-3 fs-4">{name}</p>
                                                    <p className="ps-3 fs-5">количество: {total}</p>
                                                    <p className="ps-3 fs-5">Price: {price}</p>
                                                </div>
                                            </div>)
                                    })
                                }
                            </Col>
                            <Col>
                                <div className="d-flex bg-info bg-opacity-50 p-3">
                                    <div className="me-5 pe-4">
                                        <p className="m-0 fw-bolder">Товары ({cart.length}):</p>
                                        <p className="m-0 fw-bolder">Скидка:</p>
                                        <p className="m-0 fw-bolder">Доставка:</p>
                                        <p className="pt-3 fw-bolder fs-4">Итого:</p>
                                    </div>
                                    <div>
                                        <p className="text-end m-0 fw-bold">{total} $</p>
                                        <p className="text-end m-0 fw-bold">0.00 $</p>
                                        <p className="text-end m-0 fw-bold">1.00 $</p>
                                        <p className="text-end fw-bold pt-4">{total + 1.00} $</p>
                                    </div>
                                </div>
                            </Col></>
                    }{
                        total == 0 && <p className="fs-2 ms-5 ps-5 fw-bolder">Корзина покупок</p>
                    }
                </Row>
                <Row className={`mt-5 pt-3 border-top border-2 ${openInfo}`}>
                    <p className="fs-1">Info </p>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">FullName</InputGroup.Text>
                        <FormControl
                            aria-label="FullName"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Age</InputGroup.Text>
                        <FormControl
                            aria-label="Age"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Phone</InputGroup.Text>
                        <FormControl
                            aria-label="Phone"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                        <FormControl
                            aria-label="Email"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
                        <FormControl
                            aria-label="Address"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Row>
            </Container>

        </Modal.Body>
        <Modal.Footer>
            {total !== 0 && (openInfo === "" || JSON.stringify(user) !== JSON.stringify({})) ?
                <Button variant="info" onClick={() => Payment()}>
                    Payment
                </Button> :
                <Button variant="info" onClick={Continue}>
                    Continue
                </Button>
            }
            <Button variant="secondary" onClick={closeCart}>
                Close
            </Button>

        </Modal.Footer>
    </Modal>

}
