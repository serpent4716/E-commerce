import { atom } from "recoil";

const CartValAtom = atom({
    key: 'CartValAtom', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

export default CartValAtom;