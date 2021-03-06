import { atom, selector } from "recoil"
export const users = atom({
    key: 'users',	// là unique string, bắt buộc phải có nhé.
    default: []
});

export const newUser=selector({
    key:"newUser",
    get:()=>{},
    set:({get,set},newUser)=>{
        set(users,[...get(users),newUser])
    }
})
