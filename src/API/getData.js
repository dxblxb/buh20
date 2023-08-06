import axios from "axios";

const url = "https://buh.foto-lavka.ru/api?";
export async function getData(filter) {
  const res = await fetch(url + new URLSearchParams(filter)).then((res) =>
    res.json()
  );
  return res;
}
export async function setData(data) {
  return axios.post("https://buh.foto-lavka.ru/api", data);
}
// export async function setData(data) {
//   const res = await fetch("https://buh.foto-lavka.ru/api", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return res;
// }
