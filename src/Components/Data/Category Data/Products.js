const products = [
  {
    id: 1,
    title: "Premium Agarbatti Pack",
    category: "Pooja Essentials",
    description: "Fragrant premium agarbatti sticks perfect for daily pooja, meditation and spiritual rituals.",
    priceBefore: 299,
    priceNow: 199,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80"
  },

  {
    id: 2,
    title: "Pure Camphor",
    category: "Pooja Essentials",
    description: "High quality camphor tablets for aarti, pooja rituals and spiritual purification.",
    priceBefore: 199,
    priceNow: 149,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80"
  },

  {
    id: 3,
    title: "Cotton Batti Pack",
    category: "Pooja Essentials",
    description: "Soft handmade cotton batti ideal for diyas, temples and daily worship.",
    priceBefore: 149,
    priceNow: 99,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?w=600&q=80"
  },

  {
    id: 4,
    title: "Pooja Thali Set",
    category: "Pooja Samagri",
    description: "Traditional pooja thali set with diya, bell, kumkum holder and incense stand.",
    priceBefore: 899,
    priceNow: 699,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=600&q=80"
  },

  {
    id: 5,
    title: "Havan Samagri Kit",
    category: "Pooja Samagri",
    description: "Complete havan samagri kit prepared for religious ceremonies and rituals.",
    priceBefore: 799,
    priceNow: 599,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=600&q=80"
  },

  {
    id: 6,
    title: "Kalash Set",
    category: "Pooja Samagri",
    description: "Decorative kalash set used for weddings, festivals and sacred rituals.",
    priceBefore: 499,
    priceNow: 349,
    badge: "New",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
  },

  {
    id: 7,
    title: "Decorative Diyas",
    category: "Festival Collection",
    description: "Beautiful handcrafted diyas for Diwali, festive decorations and celebrations.",
    priceBefore: 599,
    priceNow: 399,
    badge: "Festive",
    image: "https://images.unsplash.com/photo-1604423043492-4130a7f9c71d?w=600&q=80"
  },

  {
    id: 8,
    title: "Diwali Gift Hamper",
    category: "Festival Collection",
    description: "Premium festive hamper with sweets, diyas and pooja essentials.",
    priceBefore: 1499,
    priceNow: 1199,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1630491707460-0c61ef31f6b3?w=600&q=80"
  },

  {
    id: 9,
    title: "Rangoli Color Set",
    category: "Festival Collection",
    description: "Bright rangoli colors perfect for festive decorations and traditional designs.",
    priceBefore: 299,
    priceNow: 199,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1607604760190-ec9ddd9f0db0?w=600&q=80"
  },

  {
    id: 10,
    title: "Ganesh Idol",
    category: "Idols & Decor",
    description: "Beautiful Ganesh idol crafted with elegant detailing for homes and temples.",
    priceBefore: 999,
    priceNow: 799,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1567591370429-f0d6d28e1b7a?w=600&q=80"
  },

  {
    id: 11,
    title: "Lakshmi Murti",
    category: "Idols & Decor",
    description: "Premium Lakshmi murti designed for pooja rooms and festive worship.",
    priceBefore: 1299,
    priceNow: 999,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80"
  },

  {
    id: 12,
    title: "Brass Temple Bell",
    category: "Idols & Decor",
    description: "Traditional brass temple bell with rich sound and antique finish.",
    priceBefore: 699,
    priceNow: 549,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80"
  },

  {
    id: 13,
    title: "Premium Basmati Rice",
    category: "Daily Kirana",
    description: "Long grain premium basmati rice ideal for daily meals and celebrations.",
    priceBefore: 899,
    priceNow: 749,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
  },

  {
    id: 14,
    title: "Whole Wheat Atta",
    category: "Daily Kirana",
    description: "Freshly packed whole wheat atta for soft and healthy rotis.",
    priceBefore: 499,
    priceNow: 399,
    badge: "Healthy",
    image: "https://images.unsplash.com/photo-1603048719539-9ecb4c1a6c8e?w=600&q=80"
  },

  {
    id: 15,
    title: "Toor Dal",
    category: "Daily Kirana",
    description: "Premium quality toor dal rich in nutrition and perfect for everyday cooking.",
    priceBefore: 299,
    priceNow: 249,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=600&q=80"
  },

  {
    id: 16,
    title: "Sandalwood Incense",
    category: "Pooja Essentials",
    description: "Natural sandalwood fragrance incense sticks for peaceful spiritual ambience.",
    priceBefore: 249,
    priceNow: 179,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=600&q=80"
  },

  {
    id: 17,
    title: "Rose Dhoop Sticks",
    category: "Pooja Essentials",
    description: "Long lasting rose fragrance dhoop sticks for temples and homes.",
    priceBefore: 199,
    priceNow: 149,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80"
  },

  {
    id: 18,
    title: "Copper Kalash",
    category: "Pooja Samagri",
    description: "Pure copper kalash used in sacred pooja rituals and ceremonies.",
    priceBefore: 899,
    priceNow: 699,
    badge: "Traditional",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=600&q=80"
  },

  {
    id: 19,
    title: "Holi Color Pack",
    category: "Festival Collection",
    description: "Safe herbal gulal colors for Holi celebrations with friends and family.",
    priceBefore: 399,
    priceNow: 299,
    badge: "Festive",
    image: "https://images.unsplash.com/photo-1616844868137-7ffaf43c2d55?w=600&q=80"
  },

  {
    id: 20,
    title: "Krishna Idol",
    category: "Idols & Decor",
    description: "Elegant Krishna idol with flute crafted for pooja and decoration.",
    priceBefore: 1599,
    priceNow: 1299,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1567591370429-f0d6d28e1b7a?w=600&q=80"
  },

  {
    id: 21,
    title: "Cooking Oil",
    category: "Daily Kirana",
    description: "Healthy refined cooking oil suitable for daily kitchen use.",
    priceBefore: 399,
    priceNow: 329,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"
  },

  {
    id: 22,
    title: "Temple Diya Stand",
    category: "Idols & Decor",
    description: "Decorative brass diya stand designed for temples and pooja rooms.",
    priceBefore: 799,
    priceNow: 649,
    badge: "Elegant",
    image: "https://images.unsplash.com/photo-1604423043492-4130a7f9c71d?w=600&q=80"
  },

  {
    id: 23,
    title: "Navratri Pooja Kit",
    category: "Festival Collection",
    description: "Special Navratri pooja kit with all required samagri and essentials.",
    priceBefore: 999,
    priceNow: 799,
    badge: "Festival",
    image: "https://images.unsplash.com/photo-1630491707460-0c61ef31f6b3?w=600&q=80"
  },

  {
    id: 24,
    title: "Premium Kumkum",
    category: "Pooja Samagri",
    description: "Traditional red kumkum prepared for pooja rituals and festivals.",
    priceBefore: 149,
    priceNow: 99,
    badge: "Pure",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
  },

  {
    id: 25,
    title: "Pure Cow Ghee",
    category: "Daily Kirana",
    description: "Pure cow ghee ideal for cooking, aarti and religious offerings.",
    priceBefore: 899,
    priceNow: 749,
    badge: "Organic",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80"
  }
];

export default products;