import Header from "./Component/Header/Header";
import Home from './Component/Home/Home'
import SmartPhones from "./Component/smartPhones/SmartPhones";
import Categories from "./Component/Categories/Categories";
import Electronics from "./Component/electronics/Electronics";
import Essentials from "./Component/Essential/Essentials";
import Footer from "./Component/Footer/Footer"

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
