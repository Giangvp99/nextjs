import { atom } from "recoil"
export const products = atom({
    key: 'products',	// là unique string, bắt buộc phải có nhé.
    default: []
});
