import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "../leftbar/index"
import Main from "../content-main/index"
export default function Content() {
    return <><div className="pt-5">
        <Container>
            <Row>
                <Col xs={2}><LeftBar /></Col>
                <Col><Main /></Col>
            </Row>
        </Container></div>
    </>
}
