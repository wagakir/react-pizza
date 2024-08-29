// const postPizza = () => {
//   axios
//     .post(
//       "https://my-json-server.typicode.com/wagakir/react-pizza/pizza",
//       //http://localhost:3020/pizza
//       //https://my-json-server.typicode.com/wagakir/react-pizza/test
//       {
//         id: randomId(),
//         imageUrl:
//           "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
//         title: "Пепперони Фреш с перцем",
//         types: [0, 1],
//         sizes: [26, 30, 40],
//         price: randomId(),
//         category: 0,
//         rating: 4,
//       }
//     )
//     .catch((err) =>
//       alert(`не удалось доваить в корзину, ошибка:
//        "${err}"`)
// //     );
// // };
// //   const getPizza = () => {
//     axios
//       .get("https://my-json-server.typicode.com/wagakir/react-pizza/pizza")
//       .then((res) => setPizzasArray(res.data));
//   };
//   const randomId = () => {
//     return Math.floor(Math.random() * 100000);
//   };
