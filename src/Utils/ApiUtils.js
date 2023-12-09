import axios from "axios";

export const calculateToll = (add1, add2) => {
  const url = "tollgrur/calculate";
  const res = axios.get(url, Headers);
  return res;
};
