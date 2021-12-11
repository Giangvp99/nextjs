import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { products as productsState } from "../../recoil/states/products"
import { countries as countriesState } from "../../recoil/states/countries"
import ModalDetail from "../products/modal/detail"
import ModalUpdate from "../products/modal/update"
import styles from "../../styles/card.module.scss"
export default function Card(props) {
    const [products, setProducts] = useRecoilState(productsState)
    const countries = useRecoilValue(countriesState)
    const { product } = props
    const [showD, setShowD] = useState(false);
    const [showU, setShowU] = useState(false);
    const [textarea, setTextarea] = useState(description);
    const [description, setDescription] = useState("");
    const handleCloseD = () => setShowD(false);
    const Delete = () => {
        let index = products.findIndex(a => a._id == product._id)
        setProducts([...products.slice(0, index), ...products.slice(index + 1)])
    }
    const Detail = () => {
        setShowD(true)
    };
    const Update = () => {
        setShowU(true)
    };
    const handleCloseU = () => {
        setTextarea(description);
        setShowU(false);
    };


    const handleSaveU = () => {
        setDescription(textarea);
        setShowU(false);
    };
    return (<>
        <div className={`${styles['card-product']} mb-3 border border-2 d-flex flex-column`}>
            <img src={product.image} className={`card-img-top p-4 h-100`} alt="..." />
            <div className="card-body pt-0 pb-0 ps-4">
                <h5 className={`${styles['card-title']}`}>{product.title}</h5>
            </div>
            <div className="card-body d-flex justify-content-between ps-4 pe-4">
                <Button className="me-1 p-1" variant="primary" onClick={() => Detail()}>
                    Detail
                </Button>
                <Button className="me-1 p-1" variant="danger" onClick={() => Delete()}>
                    Delete
                </Button>
                <Button className="me-0 p-1" variant="warning" onClick={() => Update()}>
                    Update
                </Button>
            </div>
        </div>
        <ModalDetail show={showD} handleClose={handleCloseD} product={product} />
        <ModalUpdate
            show={showU}
            handleClose={handleCloseU}
            handleSave={handleSaveU}
            product={product}
            countries={countries}
            setTextarea={setTextarea}
        />
    </>
    );
}

