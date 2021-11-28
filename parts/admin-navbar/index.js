import React, { useState } from "react";
import Link from 'next/link'
import { Offcanvas, Button, Accordion } from "react-bootstrap";
import styles from "../../styles/admin-navbar.module.scss"
export default function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const options = {
        scroll: false,
        backdrop: true,
    };

    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <Link href="/admin">
                        <a className="navbar-brand fs-2 col-md-3 ps-3" >
                            Administration
                        </a>
                    </Link>
                    <div className="col-md-9 ">
                        <div className="d-flex justify-content-end">
                            <form className="d-flex me-2">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                            <Button variant="primary" onClick={toggleShow} className="me-3">
                                &#9776;{" "}
                            </Button>
                        </div>
                    </div>
                </nav>
                <Offcanvas show={show} onHide={handleClose} {...options}>
                    <div className={`${styles.scroll} p-0 m-0`}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className={styles.navbar}>
                            <Offcanvas.Body>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Link href="/admin/products">
                                                <a >Products</a>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body className="d-grid gap-4">
                                            <Accordion flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>По цвету</Accordion.Header>
                                                    <Accordion.Body>
                                                        <>
                                                            <div className={styles['colors-nav']}>
                                                                <Button variant="primary"></Button>{" "}
                                                                <Button variant="secondary"></Button>{" "}
                                                                <Button variant="success"></Button>{" "}
                                                                <Button variant="warning"></Button>{" "}
                                                                <Button variant="danger"></Button>{" "}
                                                                <Button variant="info"></Button>{" "}
                                                                <Button variant="dark"></Button>{" "}
                                                            </div>
                                                        </>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>По типу</Accordion.Header>
                                                    <Accordion.Body>
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
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>По составу</Accordion.Header>
                                                    <Accordion.Body>
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
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion flush>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>По назначению</Accordion.Header>
                                                    <Accordion.Body>
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
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>журнал</Accordion.Header>
                                        <Accordion.Body>
                                            <Link href="/admin/sales">
                                                <a className="m-3">журнал продаж</a>
                                            </Link>
                                            <Link href="/admin/entries">
                                                <a className="m-3">журнал приходов</a>
                                            </Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Offcanvas.Body>
                        </div>
                    </div>
                </Offcanvas>
            </div>
        </>
    );
}
