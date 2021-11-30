import React,{useState} from "react";
import Top from "../parts/header-top/index.js";
import Bottom from "../parts/header-bot/index.js";
import Content from "../parts/content/index"
import { Container, Row } from "react-bootstrap";
export default function Home({products}) {
    const [badge, setBadge] = useState(0)
    return (<>
        <Container fluid className="w-100">
            <Row>
                <Top badge={badge}/>
            </Row>
            <Row>
                <Bottom />
            </Row>
            <Row>
                <Content products={products} setBadge={setBadge}/>
            </Row>
        </Container>
    </>
    );
}

export async function getServerSideProps() {
    let res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    if (!products) {
        return {
            notFound: true,
        }
    }

    return {
        props: { products }, // will be passed to the page component as props
    }
}
