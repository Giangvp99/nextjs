import { atom, selector } from "recoil"
export const sales = atom({
    key: 'sales',	// là unique string, bắt buộc phải có nhé.
    default: []
});


