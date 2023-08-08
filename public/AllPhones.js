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
    oldPrice: "₹74999",
    newPrice: "₹32999",
    save: "Save - ₹32999",
    image: s21,
  },
  {
    name: "iPhone 12 Pro Max (128GB)",
    newPrice: "₹67999",
    oldPrice: "₹85999",
    save: "Save - ₹18000",
    image: iphone12,
  },
  {
    name: "Galaxy A71 (4GB | 64 GB )",
    newPrice: "₹10499",
    oldPrice: "₹14999",
    save: "Save - ₹4500",
    image: A71,
  },
  {
    name: "Galaxy A31 (4GB | 64 GB )",
    newPrice: "₹16999",
    oldPrice: "₹24999",
    save: "Save - ₹8000",
    image: A31,
  },
  {
    name: "Galaxy A52 (4GB | 64 GB )",
    newPrice: "₹31999",
    oldPrice: "₹40999",
    save: "Save - ₹9000",
    image: A52,
  },
];


export const categories = [
  {
    name: "Mobile",
    image: iphone12,
    description :"This will get all latest phones "
  },
  {
    name: "Cosmetics",
    image: Cosmetic,
    description : "This will get all cosmetics "
  },
  {
    name: "Electronics",
    image: electronic,
    description : "This will get all electronic"
  },
  {
    name: "Furniture",
    image: Furniture,
    description : "This will get all furniture"
  },
  {
    name: "Watches",
    image: AppleWatch,
    description : "This will get all watches"
    
  }, 
  {
    name: "Decor",
    image: decor,
    description : "This will get all decorators"
  },
  {
    name: "Accessories",
    image: Accessor,
    description : "This will get all accessories"
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
        image: dailyEssential
    },
    {
        name: "Vegitables",
        priceSave: "UP to 50% OFF",
        image: Vegitables
    },
    {
        name: "Fruits",
        priceSave: "UP to 50% OFF",
        image: Fruits
    },
    {
        name: "Strowberry",
        priceSave: "UP to 50% OFF",
        image: Strowberry
    },
    {
        name: "Mango",
        priceSave: "UP to 50% OFF",
        image: Mango
    },
    {
        name: "Cherry",
        priceSave: "UP to 50% OFF",
        image: Cherry
    },
]