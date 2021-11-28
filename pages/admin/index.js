import React from "react";
import AdminLayout from "../../layouts/adminLayout.js"
import Preview from "../../parts/admin-preview/index.js"
import Graph from "../../parts/admin-graph/index.js"
import Latest_Transaction from "../../parts/admin-lastest-trans/index.js"
export default function Dashboard() {
    return (
        <>
            <div className="row">
                <p className="fs-1 border-bottom border-3">Dashboard</p>
                <div className="col-12 pt-3 pb-5 border-bottom border-2"><p className="fs-3">This month</p><Preview /></div>
                <div className="col-12 graph mt-5 pb-5 border-bottom border-2"><Graph /></div>
                <div className="col-12 mt-5"><Latest_Transaction /></div>
            </div>
        </>
    );
}

Dashboard.Layout=AdminLayout
