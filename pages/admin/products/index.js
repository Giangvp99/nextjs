import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap"
import AdminLayout from "../../../layouts/adminLayout.js"
import Card from "../../../parts/card-admin/index.js";
import Color from "../../../parts/products/filter/color.js"
import Type from "../../../parts/products/filter/type"
import Composition from "../../../parts/products/filter/composition"
import Name from "../../../parts/products/filter/name"
import ModalNew from "../../../parts/products/modal/new"
import { products as productsState } from "../../../recoil/states/products"
import { countries as countriesState } from "../../../recoil/states/countries"
import { useRecoilState, useSetRecoilState } from "recoil";
export default function Products({ productsF, countriesF }) {
    const [products, setProducts] = useRecoilState(productsState)
    const setCountries = useSetRecoilState(countriesState)
    const [showN, setShowN] = useState(false)
    const handleCloseN = () => {
        setShowN(false)
    }
    const [filter, setFilter] = useState({
        colors: [],
        composition: "",
        name: "",
        type: ""
    })
    const Filter = () => {
        if (filter.colors.length != 0) {
            setProducts(productsF.filter(i => filter.colors.findIndex(v => v == i.color) != -1))
        }
        else {
            setProducts(productsF)
        }
    }
    const Reset = () => {
        setProducts([...[...products].sort((a, b) => a.title.localeCompare(b.title))])
    }
    const Raise = () => {
        setProducts([...[...products].sort((a, b) => a.price.localeCompare(b.price))])
    }
    const Reduce = () => {
        setProducts([...[...products].sort((a, b) => b.price.localeCompare(a.price))])
    }
    const New = () => {
        setShowN(true)
    }

    useEffect(() => {
        setProducts(productsF)
        setCountries(countriesF)
    }, [])
    useEffect(() => {
        Filter()
    }, [filter])
    return (
        <>
            <div className="products row">
                {" "}
                <div className="col-12">
                    <div className="mb-3">
                        <div className="d-flex mb-2">
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
                            <a className="btn btn-primary me-2" onClick={() => New()}>
                                New
                            </a>
                            <DropdownButton align="end" title="Сортировать" id="dropdown-menu-align-end" variant="secondary" 	>
                                <Dropdown.Item eventKey="1" onClick={() => Reset()}>по умолчанию</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" onClick={() => Raise()}>по возрастанию цены</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="3" onClick={() => Reduce()}>по убыванию цены</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <Color setFilter={setFilter} />
                        <Type setFilter={setFilter} productsA={productsF} />
                        <Composition />
                        <Name />
                    </div>
                </div>
                <div className="d-flex flex-wrap col justify-content-between">
                    {Object.entries(products).map(
                        ([slug, item]) => (
                            <Card
                                key={slug}
                                product={item}
                            />
                        )
                    )}
                </div>
            </div>
            <ModalNew show={showN}
                handleClose={handleCloseN}
                countries={countriesF}
            />
        </>
    );
}

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
    const productsF = [...data.sort((a, b) => a.name.localeCompare(b.name))]
    res = await fetch('http://localhost:3000/api/countries')
    const countriesF = await res.json()

    if (!data || !countriesF) {
        return {
            notFound: true,
        }
    }

    return {
        props: { productsF, countriesF }, // will be passed to the page component as props
    }
}

Products.Layout = AdminLayout
