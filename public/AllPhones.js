import AppleWatch from "./apple watch.png"

// mobiles
import iphone12 from "./iphone 12 pro max.png"
import s21 from "./s21-ultra.png"
import  A52 from "./A52.jpg"
import  A31 from "./a31.png"
import  A71 from "./A71.png"


// electronics images
import AppleLogo from "./electronics/Apple_logo.png"
import RealMeLOgo from "./electronics/Realme_logo.png"
import RealmePHone from "./electronics/RealMe.png"
import XiaomiLogo from "./electronics/Xiaomi_logo_.png"
import XiaomiPhone from "./electronics/Xiaomi-phone.png"


// categories images
import Cosmetic from "../src/images/Categories image/cosmetics.png"
import electronic from "../src/images/Categories image/electronics.png"
import Furniture from "../src/images/Categories image/furniture.png"
import decor from "../src/images/Categories image/Decor.png"
import Accessor from "../src/images/Categories image/Ladies_Gold.png"


// essentials images

import dailyEssential from "../src/images/Essential images/daily_essentials.png"
import Vegitables from "../src/images/Essential images/vegetables.png"
import Fruits from "../src/images/Essential images/fruits.png"
import Strowberry from "../src/images/Essential images/stroberry.png"
import Mango from "../src/images/Essential images/mango.png"
import Cherry from "../src/images/Essential images/cherry.png"


export const mobiles = [
  {
    name: "Galaxy S21 Ultra",
    oldPrice: 1200,
    id : 1,
    newPrice: 1099,
    save: "Save - $101.00",
    image: s21,
  },
  {
    name: "iPhone 12 Pro Max (128GB)",
    id : 2,
    newPrice: 999,
    oldPrice: 1100,
    save: "Save - $101.00",
    image: iphone12,
  },
  {
    name: "Galaxy A71 (4GB | 64 GB )",
    id : 3,
    newPrice: 249,
    oldPrice: 260,
    save: "Save - $11.00",
    image: A71,
  },
  {
    name: "Galaxy A31 (4GB | 64 GB )",
    id : 4,
    newPrice: 230,
    oldPrice: 240,
    save: "Save - $10.00",
    image: A31,
  },
  {
    name: "Galaxy A52 (4GB | 64 GB )",
    id : 5,
    newPrice: 242,
    oldPrice: 250,
    save: "Save - $8.00",
    image: A52,
  },
];


export const categories = [
  {
    id : 6,
    name: "Mobile",
    image: iphone12,
    newPrice : 1099,
    save : "save -100.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description :"This will get all latest phones "
  },
  {
    id : 7,
    name: "Cosmetics",
    image: Cosmetic,
    newPrice : 48,
    save : "save -8.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all cosmetics "
  },
  {
    id : 8,
    name: "Electronics",
    image: electronic,
    newPrice : 1200,
    save : "save -332.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all electronic"
  },
  {
    id : 9,
    name: "Furniture",
    image: Furniture,
    newPrice : 600,
    save : "save -21.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all furniture"
  },
  {
    id : 10,
    name: "Watches",
    image: AppleWatch,
    newPrice : 30,
    save : "save -19.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all watches"
    
  }, 
  {
    id : 11,
    name: "Decor",
    image: decor,
    newPrice : 70,
    save : "save -3.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all decorators"
  },
  {
    id : 12,
    name: "Accessories",
    image: Accessor,
    newPrice : 220,
    save : "save -8.00",
    description : "Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf."
    // description : "This will get all accessories"
  },
];


export const electronics = [
  {
    name: "IPHONE",
    image: iphone12,
    logo: AppleLogo,
    priceSave: "UP to 50% OFF",
  },
  {
    name: "REALME",
    image: RealmePHone,
    logo: RealMeLOgo,
    priceSave: "UP to 50% OFF",
  },
  {
    name: "XIAOMI",
    image: XiaomiPhone,
    logo: XiaomiLogo,
    priceSave: "UP to 50% OFF",
  },
];




export const essentials = [
  {
    name: "Daily Essentials",
    priceSave: "UP to 50% OFF",
    id: 13,
    newPrice: 32.00,
    image: dailyEssential,
  },
  {
    name: "Vegitables",
    priceSave: "UP to 50% OFF",
    id: 14,
    newPrice: 8.00,
    image: Vegitables,
  },
  {
    name: "Fruits",
    priceSave: "UP to 50% OFF",
    id: 15,
    newPrice: 66.00,
    image: Fruits,
  },
  {
    name: "Strowberry",
    priceSave: "UP to 50% OFF",
    id: 16,
    newPrice: 36.00,
    image: Strowberry,
  },
  {
    name: "Mango",
    priceSave: "UP to 50% OFF",
    id: 17,
    newPrice: 12.00,
    image: Mango,
  },
  {
    name: "Cherry",
    priceSave: "UP to 50% OFF",
    id: 18,
    newPrice: 29.00,
    image: Cherry,
  },
];