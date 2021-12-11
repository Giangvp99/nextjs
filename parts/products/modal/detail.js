import React from "react"
import { Modal, Image, Button } from "react-bootstrap"
import styles from "../../../styles/card.module.scss"

export default function ModalDetail({ show, handleClose, product }) {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName={styles['modal-w']}>
            <Modal.Header closeButton>
                <Modal.Title>{product?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">
                <div className="col-4">
                    <Image src={product?.image} rounded />
                </div>
                <div className="col-8">
                    <div className="row">
                        <p className="fs-3 text-info fw-bold mb-1">{product?.price}</p>
                    </div>
                    <div className="row">
                        <p className="fs-3 m-0 ps-2">Характеристики:</p>
                        <p className="fs-6 m-0 ps-4">Модель: {product?.model}</p>
                        <p className="fs-6 m-0 ps-4">Цвет: {product?.color}</p>
                        <p className="fs-6 m-0 ps-4">Производитель: {product?.country}</p>
                        <p className="fs-6 m-0 ps-4">Количество: {product?.amount}</p>
                        <p className="fs-6 m-0 ps-4">Состав: 
                            {
                            Object.entries(product?.material).reduce(
                                (res, [key, value]) => { return res += (value * 100).toFixed(0) + "% " + key + "\t" }, " "
                            )}
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

