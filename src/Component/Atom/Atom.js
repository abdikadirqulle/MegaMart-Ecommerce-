import { atom } from "recoil";

export const CaloryState = atom({
  key: "CaloryState",
 default : null,
});
export const phonesState = atom({
  key: "phonesState",
 default : null,
});

export const essentialState = atom({
  key: "essentialState",
 default : null,
});

const cart = atom({
  key: "CartState",
  default: false,
});

export default cart