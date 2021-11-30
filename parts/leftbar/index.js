import React from "react"
import { Form, Row, Col } from "react-bootstrap"

export default function LeftBar() {
    const types = ["Абстрактный", "Анималистический", "В клетку", "В полоску", "Геометрический", "Гусиная лапка", "Клетка", "Крупа", "Меланж", "Полоска", "Цветочный"]
    const colors = ["Айвори", "Бежевый", "Белый", "Бирюзовый", "Бордовый", "Голубой", "Желтый", "Зеленый", "Золотой", "Коричневый", "Красный", "Малиновый", "Оранжевый", "Розовый", "Серебро", "Серый", "Синий", "Сиреневый", "Фиолетовый", "Хаки", "Черный"]
    return <>
        <p className="fw-bold">Подобрать товар:</p>
        <Form className="p-2">
            <Form.Label>Цена (₽): </Form.Label>
            <Row className="mb-3">
                <Col>
                    <Form.Control placeholder="Ot 2$" />
                </Col>
                <Col>
                    <Form.Control placeholder="30$" />
                </Col>
            </Row >
            <Form.Label>Плотность: </Form.Label>
            <Row>
                <Col>
                    <Form.Control placeholder="Ot 2$" />
                </Col>
                <Col>
                    <Form.Control placeholder="30$" />
                </Col>
            </Row>
            <Form.Label>Узор: </Form.Label>
            {
                Object.entries(types).map(([slug, item]) =>
                    <Form.Check
                        key={slug}
                        type="checkbox"
                        label={`${item}`}
                    />

                )
            }
            <Form.Label>Цвет: </Form.Label>
            {
                Object.entries(colors).map(([slug, item]) =>
                    <Form.Check
                        key={slug}
                        type="checkbox"
                        label={`${item}`}
                    />

                )
            }
        </Form>
    </>
}
