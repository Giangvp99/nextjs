import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/card.module.scss"
import { useAppContext } from "../../store/index"
export default function Card(props) {
    const [state, setState] = useAppContext()
    const Buy = () => {
        let i = state.users.findIndex(a => a.name == "Giang")
        setState({
            ...state, users: [
                ...state.users.slice(0, i),
                { ...state.users[i], age: state.users[i].age + 1 },
                ...state.users.slice(i + 1)
            ]
        })
        console.log(state.users[i]?.age)
    }

    return (<>
        <div className={`${styles['card-product']} mb-3 border border-2 position-relative`}>
            <img src={props.img} className="card-img-top p-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-body ms-3 p-1 ">
                <div>Price: {props.price}</div>
            </div>
            <Button variant="info" onClick={() => Buy()}><i aria-hidden className="fas fa-cart-arrow-down me-1"></i>Buy</Button>{' '}
        </div>

    </>
    );
}
// import React, { useContext } from "react";
// import { Button } from "react-bootstrap";
// import styles from "../../styles/card.module.scss"
// import { Context } from "../../store/index"
// export default function Card(props) {
//     const [state, dispatch] = useContext(Context)
//     const Buy = () => {
//         dispatch({type:"BUY_PRODUCT",payload:state.index+1})
//         console.log(state.index)
//     }
//     return (<>
//         <div className={`${styles['card-product']} mb-3 border border-2 position-relative`}>
//             <img src={props.img} className="card-img-top p-4" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{props.name}</h5>
//                 <p className="card-text">{props.description}</p>
//             </div>
//             <div className="card-body ms-3 p-1 ">
//                 <div>Price: {props.price}</div>
//             </div>
//             <Button variant="info" onClick={() => Buy()}><i aria-hidden className="fas fa-cart-arrow-down me-1"></i>Buy</Button>{' '}
//         </div>
// 
//     </>
//     );
// }
// 
