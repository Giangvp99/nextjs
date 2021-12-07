import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap"
import { Button, Modal, Form, Image } from "react-bootstrap";
import AdminLayout from "../../../layouts/adminLayout.js"
import Card from "../../../parts/card-admin/index.js";
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
        let index = products.findIndex(a => a._id == id)
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
                <div className="col-12">
                    <div className="mb-3">
                        <div className="d-flex">
                            <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#colors" role="button" aria-expanded="false" aria-controls="colors">
                                По цвету
                            </a>
                            <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#types" role="button" aria-expanded="false" aria-controls="types">
                                По типу
                            </a>
                            <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#composition" role="button" aria-expanded="false" aria-controls="composition">
                                По составу
                            </a>
                            <a className="btn btn-primary me-auto" data-bs-toggle="collapse" href="#names" role="button" aria-expanded="false" aria-controls="names">
                                По назначению
                            </a>
                            <DropdownButton align="end" title="Сортировать" id="dropdown-menu-align-end" variant="secondary" 	>
                                <Dropdown.Item eventKey="1" onClick={() => Reset()}>по умолчанию</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" onClick={() => Raise()}>по возрастанию цены</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="3" onClick={() => Reduce()}>по убыванию цены</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="collapse" id="colors">
                            <div className="card card-body">
                                <div className={styles.colors}>
                                    <Button variant="primary"></Button>{" "}
                                    <Button variant="secondary"></Button>{" "}
                                    <Button variant="success"></Button>{" "}
                                    <Button variant="warning"></Button>{" "}
                                    <Button variant="danger"></Button>{" "}
                                    <Button variant="info"></Button>{" "}
                                    <Button variant="dark"></Button>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="types">
                            <div className="card card-body">
                                <ul className={styles.ul}>
                                    <li>
                                        <a href="https://onlinetkani.ru/atlas/">Атлас</a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/atlas/atlas-gorohi/">
                                                    Атлас в горошек
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/atlas/atlas-zhakkardovyj/">
                                                    Атлас жаккардовый
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/kitai-shelk/">
                                            Китайский шелк
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/kostjumnyj-polijester/">
                                            Костюмная
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/kurtochnaja-plashhevaja/">
                                            Курточная, Плащевая
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/kurtochnaja-plashhevaja/plenka_pvh/">
                                                    Пленка ПВХ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/stezhka/">
                                            Стёганая
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/tafta/">Тафта</a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/shelk/">Шелк</a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/shelk/krepdeshin/">
                                                    Крепдешин
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/shelk/shelk-zhakkard/">
                                                    Шелк жаккард
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/shelk/shelk-shifon/">
                                                    Шелк шифон
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/sherst/">Шерсть</a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/sherst/sherst-bukle/">
                                                    Шерсть букле
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/sherst/sherst-kostyumnaya/">
                                                    Шерсть костюмная
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/sherst/sherst-paltovaya/">
                                                    Шерсть пальтовая
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="collapse" id="composition">
                            <div className="card card-body">
                                <ul className={styles.ul}>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/viskoznye-tkani/">
                                            Вискозные
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/tkani-s-lajkroj/">
                                            Лайкра
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/lnyanye-tkani/">
                                            Льняные
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/mehovye-tkani/">
                                            Меховые
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/tkani-poliester/">
                                            Полиэстер
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/po-sostavu/tkani-poliester/zhakkard-poliester/">
                                                    Жаккард полиэстер
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/">
                                            Хлопковые
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/velvet-hlopok/">
                                                    Хлопковый вельвет
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/hlopok-poliester/">
                                                    Хлопок полиэстер
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/shelkovye-tkani/">
                                            Шелковые{" "}
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="https://onlinetkani.ru/po-sostavu/shelkovye-tkani/naturalnyj-shelk/">
                                                    Натуральный шелк
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-sostavu/sherstyanye-tkani/">
                                            Шерстяные
                                        </a>
                                    </li>
                                </ul>{" "}

                            </div>
                        </div>
                        <div className="collapse" id="names">
                            <div className="card card-body">
                                <ul className={styles.ul}>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-bryuk/">
                                            Для брюк
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-verhnej-odezhdy/">
                                            Для верхней одежды
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-domashnego-tekstilya/">
                                            Для домашнего текстиля
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-zhenskoj-odezhdy/">
                                            Для женской одежды
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-zhivopisi/">
                                            Для живописи
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-zanavesok/">
                                            Для занавесок
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-karnavalnyh-kostyumov/">
                                            Для карнавальных костюмов
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-rabochej-odezhdy/">
                                            Для рабочей одежды
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-rubashek/">
                                            Для рубашек
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-sarafanov/">
                                            Для сарафанов
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-svadeb/">
                                            Для свадеб
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-svadebnogo-platya/">
                                            Для свадебного платья
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-skatertej/">
                                            Для скатертей
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://onlinetkani.ru/po-naznacheniyu/tkani-dlya-sorochek/">
                                            Для сорочек
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
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
