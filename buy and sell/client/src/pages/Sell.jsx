import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { sellProducts } from "../store/shopping-cart/productSlice";
import Swal from "sweetalert2";

const Sell = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setproducts] = useState({
    title: "",
    image: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setproducts({ ...products, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sellProducts({
        title: products.title,
        image: products.image,
        price: products.price,
      })
    );

    setproducts({
      title: "",
      image: "",
      price: "",
    });
    navigate("/buy");

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${products.title} has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <h1 className="center m-3">Sell Your Products</h1>
      <div className="sell-container">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label className="sell-lable" for="title">
              Product Name
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your product name"
              type="text"
              required
              onChange={handleChange}
              value={products.title}
            />
          </FormGroup>
          <FormGroup>
            <Label className="sell-lable" for="image">
              Product Image
            </Label>
            <Input
              id="image"
              name="image"
              placeholder="Enter your product image URL"
              type="url"
              required
              onChange={handleChange}
              value={products.image}
            />
          </FormGroup>
          <FormGroup>
            <Label className="sell-lable" for="price">
              Product Price
            </Label>
            <Input
              id="price"
              name="price"
              placeholder="Enter your product price"
              type="number"
              required
              onChange={handleChange}
              value={products.price}
            />
          </FormGroup>
          <button className="addTOCart__btn mb-5 me-4">Sell</button>
        </Form>
      </div>
    </>
  );
};

export default Sell;
