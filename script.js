// // // Literals;
// // Literals expand

// // const cat = {
// //   name: "Vasia",
// //   color: "White",
// //   age: "5",
// // };

// // const smartphone = {
// //   name: "Samsung",
// //   color: "grey",
// //   memory: "256Gb",
// //   camera: "64mp",
// // };

// // const enterkey = prompt("Додайте властивість коту");
// // let enterProperty2 = prompt("Щось для кота ");

// // const enterkey1 = prompt("Додайте властивіст телефону");
// // let enter2 = prompt("Додайте властівість телефону");

// // cat[enterkey] = enterProperty2;
// // smartphone[enterkey1] = enter2;
// // // console.log(cat);
// // // console.log(smartphone);

// // const newObject = { ...cat };
// // const newKey = prompt("Введіть властивість");
// // let newKey2 = prompt("Введіть властивість");
// // newObject[newKey] = newKey2;

// var body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };
// console.log(body.children[1].children[1].children[0]);
// console.log(body.children[0].children[3].attrs.id);

// var body = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       parent: "body",
//       children: [
//         {
//           tagName: "span",
//           parent: "div",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//           parent: "div",
//         },
//         {
//           tagName: "input",
//           parent: "div",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           parent: "div",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       parent: "body",
//       children: [
//         {
//           tagName: "button",
//           parent: "div",
//           attrs: {
//             id: "ok",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           parent: "div",
//           attrs: {
//             id: "cancel",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };
// let way = body.children[1].children[0].attrs;

// let key = prompt("введіть ключ");
// let value = prompt("введіть значення");
// way[key] = value;
// console.log(way);

// const {
//   children: [
//     {
//       children: [
//         {
//           children: [spanText],
//         },
//       ],
//     },
//   ],
// } = body;
// console.log(spanText);

// const {
//   children: [btnText],
// } = body.children[1].children[1];

// const {
//   attrs: { id: anotherText },
// } = body.children[0].children[3];
// console.log(anotherText);

// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// const [odd1, even1, odd2, even2, odd3, ...string] = arr;
// console.log(string);

// let arr = [1, "abc"];
// const [number, [s1, s2, s3]] = arr;
// console.log(number);
// console.log(s1);

// let obj = {
//   name: "Ivan",
//   surname: "Petrov",
//   children: [{ name: "Maria" }, { name: "Nikolay" }],
// };

// const {
//   children: [{ name: name1 }, { name: name2 }],
// } = obj;

// console.log(name1, name2);

// let arr = [1, 2, 3, 4, 5, 6, 7, 10];

// const { 0: a, 1: b, length } = arr;
// console.log(a, b, length);

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);

//     let enterCurrency = prompt("Введіть валюту").toLocaleUpperCase();
//     let enterCurrency2 = prompt(
//       "Введіть валюту в яку хочете обміняти"
//     ).toLocaleUpperCase();
//     const amount = parseFloat(prompt("Введіть  суму  "));

//     if (
//       data.rates.hasOwnProperty(enterCurrency) &&
//       data.rates.hasOwnProperty(enterCurrency2)
//     ) {
//       const getCourse = data.rates[enterCurrency] / data.rates[enterCurrency2];
//       const sum = amount * getCourse;
//       console.log(`${sum}`);
//     } else {
//       console.log("Введіть допустимі значення");
//     }
//   });

// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };

// const form = document.createElement("form");

// for (const key in car) {
//   if (car.hasOwnProperty(key)) {
//     const label = document.createElement("label");
//     label.textContent = key + ": ";

//     const input = document.createElement("input");
//     input.type =
//       typeof car[key] === "number"
//         ? "number"
//         : typeof car[key] === "boolean"
//         ? "checkbox"
//         : "text";
//     input.value = car[key];

//     if (input.type === "checkbox") {
//       input.checked = car[key];
//     }

//     label.appendChild(input);
//     form.appendChild(label);
//     form.appendChild(document.createElement("br"));
//   }
// }

// document.body.appendChild(form);

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     let getDate = Object.keys(data.rates);
//     let selectElement = document.createElement("select");

//     getDate.forEach(function (elem) {
//       let optionElement = document.createElement("option");
//       optionElement.value = elem;
//       optionElement.textContent = elem;
//       selectElement.appendChild(optionElement);
//     });

//     document.body.appendChild(selectElement);
//   });

// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     const nameCurrency = Object.keys(data.rates);
//     const courseCurrency = Object.values(data.rates);

//     const table = {};
//     const crosCourse = courseCurrency / nameCurrency;

//     console.log(crosCourse);
//   });
