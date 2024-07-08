import { atom } from "recoil";

const CartIndexAtom = atom({
    key: 'CartIndexAtom', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });

export default CartIndexAtom;