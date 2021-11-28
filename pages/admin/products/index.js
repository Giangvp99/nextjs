import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap"
import { Button, Modal, Form, Image } from "react-bootstrap";
import AdminLayout from "../../../layouts/adminLayout.js"
import Card from "../../../parts/card/index.js";
import styles from "../../../styles/card.module.scss"
export default function Products({ data, countries }) {
    const [description, setDescription] = useState("");
    const [textarea, setTextarea] = useState(description);
    const [products, setProducts] = useState([...data.sort((a, b) => a.name.localeCompare(b.name))]);
    const [product, setProduct] = useState(null);
    const [id, setId] = useState(null);

    const [showD, setShowD] = useState(false);
    const [showU, setShowU] = useState(false);
    const handleCloseU = () => {
        setTextarea(description);
        setShowU(false);
    };
    const handleCloseD = () => setShowD(false);
    const Update = (id) => {
        setProduct(products.find(a => a._id == id));
        setShowU(true)
    };
    const Detail = (id) => {
        setProduct(products.find(a => a._id == id));
        setShowD(true)
    };
    const Delete = (id) => {
        let index=products.findIndex(a=>a._id==id)
        setProducts([...products.slice(0, index), ...products.slice(index + 1)])
    }
    const handleSaveU = () => {
        setDescription(textarea);
        setShowU(false);
    };

    const Reset = () => {
        setProducts([...products.sort((a, b) => a.name.localeCompare(b.name))])
    }
    const Raise = () => {
        products.sort((a, b) => a.price.localeCompare(b.price))
        setProducts([...products])
    }
    const Reduce = () => {
        setProducts([...products.sort((a, b) => b.price.localeCompare(a.price))])
    }
    return (
        <>
            <div className="products row">
                {" "}
                <div className="col-12 mt-5 d-flex flex-row"><p className="fs-2">Tkani</p>
                    <div className="ms-auto ">
                        <DropdownButton align="end" title="Сортировать" id="dropdown-menu-align-end" variant="secondary" 	>
                            <Dropdown.Item eventKey="1" onClick={() => Reset()}>по умолчанию</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2" onClick={() => Raise()}>по возрастанию цены</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3" onClick={() => Reduce()}>по убыванию цены</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="d-flex flex-wrap col justify-content-between">
                    {Object.entries(products).map(
                        ([slug, { _id, img, name, description, price, quatity, country, color, material }]) => (
                            <Card
                                key={slug}
                                _id={_id}
                                img={img}
                                name={name}
                                description={description}
                                price={price}
                                quatity={quatity}
                                material={material}
                                country={country}
                                color={color}
                                setId={setId}
                                Detail={Detail}
                                Update={Update}
                                Delete={Delete}
                            />
                        )
                    )}
                </div>
            </div>
            <Modal show={showD} onHide={handleCloseD} dialogClassName={styles['modal-w']}>
                <Modal.Header closeButton>
                    <Modal.Title>{product?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="row">
                    <div className="col-4">
                        <Image src={product?.img} rounded />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {product?.description}
                        </div>
                        <div className="row mt-3">
                            <p>Color: {product?.color}</p>
                            <p>Contry: {product?.country}</p>
                            <p>Quatity: {product?.quatity}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseD}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showU} onHide={handleCloseU} dialogClassName={styles['modal-w']}>
                <Modal.Header closeButton>
                    <Modal.Title>{product?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={product?.description}
                            onChange={(e) => {
                                setTextarea(e.target.value);
                            }}
                        />
                        <Form.Select aria-label="select country">
                            <option>{product?.country}</option>
                            {
                                Object.entries(countries).map(
                                    ([slug, { country }]) => <option key={slug} value={slug}>{country}</option>
                                )
                            }
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveU}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleCloseU}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
    res = await fetch('http://localhost:3000/api/countries')
    const countries = await res.json()

    if (!data || !countries) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data, countries }, // will be passed to the page component as props
    }
}

Products.Layout = AdminLayout
