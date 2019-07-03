arr = [
  {
    _id: "5d1ca1759771bc1b0073b522",
    quantity: 1,
    product: {
      _id: "5d1a89202e1492307c323265",
      title: "Blood of Elves",
      price: 9.99,
      description:
        "Blood of Elves (Polish: Krew elfów) is the first novel in the Witcher Saga written by the Polish fantasy writer Andrzej Sapkowski, first published in Poland in 1994.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41AdYi7YnLL._SX320_BO1,204,203,200_.jpg",
      userId: "5d19324bf7cf3e1aa82adf38",
      __v: 0
    }
  },
  {
    _id: "5d1ca1759771bc1b0073b522",
    quantity: 1,
    product: {
      _id: "5d1a89202e1492307c323265",
      title: "Blood of Elves",
      price: 9.99,
      description:
        "Blood of Elves (Polish: Krew elfów) is the first novel in the Witcher Saga written by the Polish fantasy writer Andrzej Sapkowski, first published in Poland in 1994.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41AdYi7YnLL._SX320_BO1,204,203,200_.jpg",
      userId: "5d19324bf7cf3e1aa82adf38",
      __v: 0
    }
  }
];

arr.reduce((a, b) => {
  return { x: a.product.price * a.quantity + b.product.price * b.quantity };
});
