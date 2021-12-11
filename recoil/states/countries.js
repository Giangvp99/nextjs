import { atom } from "recoil"
export const countries = atom({
    key: 'countries',	// là unique string, bắt buộc phải có nhé.
    default: []
});
