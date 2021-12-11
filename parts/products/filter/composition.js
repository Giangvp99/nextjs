import React from "react"
import styles from "../../../styles/card.module.scss"
export default function Composition() {
    return (
        <div className="collapse" id="composition">
            <div className="card card-body">
                <ul className={styles.ul}>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/viskoznye-tkani/">
                            Вискозные
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/tkani-s-lajkroj/">
                            Лайкра
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/lnyanye-tkani/">
                            Льняные
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/mehovye-tkani/">
                            Меховые
                        </a>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/tkani-poliester/">
                            Полиэстер
                        </a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/po-sostavu/tkani-poliester/zhakkard-poliester/">
                                    Жаккард полиэстер
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/">
                            Хлопковые
                        </a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/velvet-hlopok/">
                                    Хлопковый вельвет
                                </a>
                            </li>
                            <li>
                                <a href="https://onlinetkani.ru/po-sostavu/hlopkovye-tkani/hlopok-poliester/">
                                    Хлопок полиэстер
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/shelkovye-tkani/">
                            Шелковые{" "}
                        </a>
                        <ul>
                            <li>
                                <a href="https://onlinetkani.ru/po-sostavu/shelkovye-tkani/naturalnyj-shelk/">
                                    Натуральный шелк
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://onlinetkani.ru/po-sostavu/sherstyanye-tkani/">
                            Шерстяные
                        </a>
                    </li>
                </ul>{" "}

            </div>
        </div>

    )
}
