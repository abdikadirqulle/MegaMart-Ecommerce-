import { Outlet } from "react-router-dom";
import Header from "./Component/Header/Header";
import SmartPhones from "./Component/smartPhones/SmartPhones";
import Categories from "./Component/Categories";
import Electronics from "./Component/Electronics";
import Essentials from "./Component/Essentials";
import Footer from "./Component/Footer/Footer"
import Home from './Component/Home.jsx'

function App() {
  return (
    <div className="flex flex-col gap-10">
      <div className="fixed w-full z-50" >
        <Header />
      </div>
      <div className="mt-[14rem] mx-2">
        <Home />
        <SmartPhones />
        <Categories />
        <Electronics />
        <Essentials />
      </div>
        <Footer />
    </div>
  );
}

export default App;
