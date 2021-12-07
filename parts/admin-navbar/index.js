import React from "react";
import { Nav } from "react-bootstrap"
import Link from 'next/link'
export default function NavBar() {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                    <div className="col-md-3">
                        <Link href="/admin">
                            <a className="navbar-brand fs-1 col-md-3 ps-3" >
                                Administration
                            </a>
                        </Link>
                    </div>
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
                        </div>
                    </div>
                </nav>
                <div className="row mb-5 ms-5 me-5">
                    <Nav justify variant="pills" defaultActiveKey="/admin">
                        <Nav.Item>
                            <Link href="/admin">
                                <Nav.Link href="/admin">Dashboard</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/admin/products">
                                <Nav.Link href="/admin/products">Products</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/admin/sales">
                                <Nav.Link href="/admin/sales">Sales</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/admin/entries">
                                <Nav.Link href="/admin/entries">Entries</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </>
    );
}
