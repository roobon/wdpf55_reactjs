import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import NoPage from "../pages/NoPage";
import UseState from "../pages/UseState";
import UseEffect from "../pages/UseEffect";
import UseContext from "../pages/UseContext";
import Users from "../pages/Users";
import UserInsert from "../pages/UserInsert";
import Cart from "../pages/Cart";
import UserRegistration from "../pages/UserRegistration";
import Contact from "../pages/Contact";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/registration" element={<UserRegistration />}></Route>
          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/useeffect" element={<UseEffect />}></Route>
          <Route path="/usecontext" element={<UseContext />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/newuser" element={<UserInsert />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
