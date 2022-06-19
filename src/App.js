import logo from "./logo.svg";
import "./App.css";
import Addvertise from "./components/UI/Advertise/add";
import Header from "./components/Header/header";
import Cards from "./components/UI/Cards/cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/UI/products/product";
import { getProducts } from "./api/productApi";
import { useDispatch } from "react-redux";
import { appendMedicines } from "./action/action";
import { useEffect } from "react";
import LogInForm from "./components/UI/auth/login";
import SignUp from "./components/UI/auth/signUp";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((e) => {
      // console.log("data", e);
      dispatch(appendMedicines(e));
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Addvertise />
                <Cards />
              </>
            }
          ></Route>
          <Route
            path="/medicines"
            element={
              <>
                <Header />
                <Product />
              </>
            }
          ></Route>
          <Route path="/login" element={<LogInForm />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
