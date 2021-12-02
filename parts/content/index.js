import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "../leftbar/index"
import Main from "../content-main/index"
export default function Content({ products}) {
    return <><div className="pt-5">
        <Container>
            <Row>
                <Col xs={2}><LeftBar /></Col>
                <Col><Main products={products} /></Col>
            </Row>
        </Container></div>
    </>
}
