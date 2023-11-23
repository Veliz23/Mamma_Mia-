import { Route, Routes } from "react-router-dom";
import Footer            from "./components/Footer";
import Header            from "./components/Header";
import Home              from "./pages/Home";
import InfoProduct       from "./pages/InfoProduct";
import SaleDetail        from "./pages/SaleDetail";

export default function App() {
    return(
      <><div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infoProduct/:id" element={<InfoProduct />}/>
          <Route path="/saleDetail" element={<SaleDetail />}/>
        </Routes>
        <Footer />
        </div>
      </>
    )
};
