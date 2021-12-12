import { atom, selector } from "recoil"
export const entries = atom({
    key: 'entries',	// là unique string, bắt buộc phải có nhé.
    default: []
});

export const addEntry = selector({
    key: "addEntry",
    get: () => { },
    set: ({ get, set }, entry) => {
        const list = get(entries)
        set(entries, [...list, entry])
    }
})
