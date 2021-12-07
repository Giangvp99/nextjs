import { atom } from "recoil"
export const cart = atom({
    key: 'cart',	// là unique string, bắt buộc phải có nhé.
    default: [],		// giá trị mặc định khi khởi tạo.
});
