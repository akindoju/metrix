import sales from "../assets/sales.png";
import customers from "../assets/customers.png";
import orders from "../assets/orders.png";
import inventory from "../assets/inventory.png";
import cart from "../assets/cart.png";

export const cardData1 = [
  {
    icon: sales,
    heading1: "Sales",
    heading2: "Volume",
    content1: "₦4,000,000.00",
    content2: 450,
    bonus2: "+20.00%",
  },

  {
    icon: customers,
    heading1: "Customers",
    heading2: "Active",
    content1: "1,250",
    content2: "1,180",
    bonus1: "+15.80%",
    bonus2: "85%",
  },

  {
    icon: orders,
    heading1: "All Orders",
    heading2: "Pending",
    heading3: "Completed",
    content1: 450,
    content2: 5,
    content3: 445,
  },
];

export const cardData2 = [
  {
    icon: inventory,
    heading1: "All Products",
    heading2: "Active",
    content1: 45,
    content2: 32,
    bonus2: "+24%",
  },

  {
    icon: cart,
    heading1: "Abandoned Cart",
    heading2: "Customers",
    content1: "20%",
    content2: 30,
    bonus1: "+0.00%",
  },
];
