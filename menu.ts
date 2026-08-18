export type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        name: "Pepper Soup",
        description: "Spicy goat meat pepper soup simmered with local herbs and scent leaf.",
        price: "₦2,500",
      },
      {
        name: "Puff Puff Bites",
        description: "Golden, fluffy puff puff served with a side of chili honey dip.",
        price: "₦1,200",
      },
      {
        name: "Suya Skewers",
        description: "Grilled beef skewers coated in smoky suya spice, served with onions and tomato.",
        price: "₦2,000",
        popular: true,
      },
      {
        name: "Plantain Chips & Sauce",
        description: "Crispy plantain chips with a tangy pepper dipping sauce.",
        price: "₦1,500",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      {
        name: "White Rice & Chicken",
        description: "Steamed white rice served with grilled pepper chicken and fresh salad.",
        price: "₦3,500",
        popular: true,
      },
      {
        name: "Jollof Rice & Beef",
        description: "Smoky party-style jollof rice with tender beef and fried plantain.",
        price: "₦3,800",
      },
      {
        name: "Fried Rice & Turkey",
        description: "Vegetable-loaded fried rice paired with a crispy turkey portion.",
        price: "₦4,000",
      },
      {
        name: "Egusi Soup & Pounded Yam",
        description: "Rich melon seed soup with assorted meat and smooth pounded yam.",
        price: "₦4,200",
      },
      {
        name: "Native Rice & Fish",
        description: "Palm-oil native rice with peppered croaker fish and vegetables.",
        price: "₦4,000",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        name: "Chapman",
        description: "House-made Chapman with citrus, grenadine, and a splash of soda.",
        price: "₦1,800",
      },
      {
        name: "Zobo",
        description: "Chilled hibiscus zobo infused with ginger, pineapple, and mint.",
        price: "₦1,000",
      },
      {
        name: "Fresh Watermelon Juice",
        description: "Cold-pressed watermelon juice, no added sugar.",
        price: "₦1,500",
      },
      {
        name: "Soft Drinks",
        description: "Coke, Fanta, Sprite, or Bottled Water — ice cold.",
        price: "₦600",
      },
    ],
  },
];
