import React, { useEffect, useState } from "react"
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import styles from "../../../styles/filter-color.module.scss"
export default function Color({ setFilter }) {
    const variants = ["primary", "secondary", "success", "warning", "danger", "info", "dark"]
    const SetFilter = () => {
        setFilter(prev => {
            return {
                ...prev,
                colors: value.reduce((res, item) => [...res,variants[item]], [])
            }
        })
    }
    const [value, setValue] = useState([]);
    const handleChange = (val) => setValue(val);
    useEffect(() => {
        SetFilter()
    }, [value])
    return <>
        <div className="collapse" id="colors">
            <div className="card card-body">
                <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                    {
                        Object.entries(variants).map(([slug, item]) =>
                            <ToggleButton
                                key={slug}
                                id={`tbg-btn-${slug}`}
                                value={parseInt(slug)}
                                variant={`outline-${item}`}
                                className={`${styles.size} m-2 border border-3 border-${item} `}
                            />

                        )
                    }
                </ToggleButtonGroup>
            </div>
        </div></>

}
