import http from 'http';

const products = [
  {
    id: "prod-1",
    name: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    rating: 2.56,
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    id: "prod-2",
    name: "Eyeshadow Palette with Mirror",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    rating: 2.86,
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
  },
  {
    id: "prod-3",
    name: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    rating: 4.64,
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
  },
  {
    id: "prod-4",
    name: "Red Lipstick",
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    rating: 4.36,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  },
  {
    id: "prod-5",
    name: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    rating: 4.32,
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
  },
  {
    id: "prod-6",
    name: "Calvin Klein CK One",
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    rating: 4.37,
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
  },
  {
    id: "prod-7",
    name: "Chanel Coco Noir Eau De",
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    rating: 4.26,
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
  },
  {
    id: "prod-8",
    name: "Dior J'adore",
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    rating: 3.8,
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
  },
  {
    id: "prod-9",
    name: "Annibale Colombo Bed",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    rating: 4.77,
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
  },
  {
    id: "prod-10",
    name: "Knoll Saarinen Executive Conference Chair",
    description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    rating: 4.88,
    image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
  },
  {
    id: "prod-11",
    name: "Apple",
    description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
    price: 1.99,
    rating: 4.19,
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
  },
  {
    id: "prod-12",
    name: "Beef Steak",
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "groceries",
    price: 12.99,
    rating: 4.47,
    image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
  },
  {
    id: "prod-13",
    name: "Honey Jar",
    description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    category: "groceries",
    price: 6.99,
    rating: 3.97,
    image: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"
  },
  {
    id: "prod-14",
    name: "Ice Cream",
    description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
    price: 5.49,
    rating: 3.39,
    image: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
  },
  {
    id: "prod-15",
    name: "Kiwi",
    description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    category: "groceries",
    price: 2.49,
    rating: 4.93,
    image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"
  }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});