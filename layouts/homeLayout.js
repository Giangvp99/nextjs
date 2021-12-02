import React from "react";
import Top from "../parts/header-top/index.js";
import Bottom from "../parts/header-bot/index.js";
import { Container, Row } from "react-bootstrap";
export default function HomeLayout({ children }) {
    return (<>
        <Container fluid className="w-100">
            <Row>
                <Top />
            </Row>
            <Row>
                <Bottom />
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    </>
    );
}
