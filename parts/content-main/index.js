import React  from "react"
import Card from "../card-user/index";
export default function Main({ products }) {
    return <>
        <div className="d-flex flex-wrap col justify-content-between ps-4">
            {Object.entries(products).map(
                ([slug, { _id, img, name, description, price, country, color, material }]) => (
                    <Card
                        key={slug}
                        _id={_id}
                        img={img}
                        name={name}
                        description={description}
                        price={price}
                        material={material}
                        country={country}
                        color={color}
                    />
                )
            )}
        </div>

    </>
}
