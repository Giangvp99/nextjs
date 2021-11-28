import React from 'react'
import NavBar from "../parts/admin-navbar/index.js";
export default function AdminLayout({ children }) {
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row">
                    <NavBar />
                </div>
                <div className="row h-100 d-flex flex-row">
                    <div className="col-12">
                        <div className="container content ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
