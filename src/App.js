import "./App.css";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import { useState } from "react";
import NewCustomer from "./pages/NewCustomer";
import Customer from "./pages/Customer";


function App() {
  const [customers, setCustomers] = useState(["Pera", "Mika", "Zika"]);

  const handleOnDelete = (index) => {
    setCustomers((prev) => prev.filter((element, idx) => index !== idx))
  }
  const handleAddCustomer = (customer) => {
    setCustomers((prev) => [...prev, customer])
  }

  return (
    <Routes>
      <Route index path="" element={<><Headers /> <h1>POCETNA STRANICA</h1> </>} ></Route>
      <Route path="/customers" element={<Customers customers={customers} handleOnDelete={handleOnDelete} />}  ></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/addcustomers" element={<NewCustomer handleAddCustomer={handleAddCustomer} />} ></Route>
    </Routes>
  );
}

export default App;
