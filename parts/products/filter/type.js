import React from "react"
import styles from "../../../styles/card.module.scss"
import { useRecoilState } from "recoil"
import { products as productsState } from "../../../recoil/states/products"
export default function Type({ setFilter, productsA }) {
    const [products, setProducts] = useRecoilState(productsState)
    const SetFilter = (type) => {
        // setFilter(prev => {
        //     return {
        //         ...prev,
        //         type: "Атлас в горошек"
        //     }
        // })
        if (type == undefined)
            setProducts(productsA)
        else
            setProducts(products.filter(i => i.type == type))
    }

    return (
        <div className="collapse" id="types">
            <div className="card card-body">
                <ul className={styles.ul}>
                    <li>
                        <a href="#" onClick={() => SetFilter()}>All</a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/atlas/">Атлас</a>
                        <ul>
                            <li>
                                <a href="#" onClick={() => SetFilter("Атлас в горошек")}>
                                    Атлас в горошек
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/atlas/atlas-zhakkardovyj/">
                                    Атлас жаккардовый
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/kitai-shelk/">
                            Китайский шелк
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/kostjumnyj-polijester/">
                            Костюмная
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/kurtochnaja-plashhevaja/">
                            Курточная, Плащевая
                        </a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/kurtochnaja-plashhevaja/plenka_pvh/">
                                    Пленка ПВХ
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/stezhka/">
                            Стёганая
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/tafta/">Тафта</a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/shelk/">Шелк</a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/shelk/krepdeshin/">
                                    Крепдешин
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/shelk/shelk-zhakkard/">
                                    Шелк жаккард
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/shelk/shelk-shifon/">
                                    Шелк шифон
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/sherst/">Шерсть</a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/sherst/sherst-bukle/">
                                    Шерсть букле
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/sherst/sherst-kostyumnaya/">
                                    Шерсть костюмная
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/sherst/sherst-paltovaya/">
                                    Шерсть пальтовая
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div >
        </div >
    )
}
