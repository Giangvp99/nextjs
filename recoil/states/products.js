import { atom, selector } from "recoil"
export const products = atom({
    key: 'products',	// là unique string, bắt buộc phải có nhé.
    default: []
});

export const addProduct = selector({
    key: "add",
    get: () => { },
    set: ({ get, set }, product) => {
        const list = get(products)
        set(products, [...list, product])
    }
})
