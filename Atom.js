import { atom } from "recoil";

export const CaloryState = atom({
  key: "CaloryState",
 default : null,
});

const cart = atom({
  key: "CartState",
  default: false,
});

export default cart