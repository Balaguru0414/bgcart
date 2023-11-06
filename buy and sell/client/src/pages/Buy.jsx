import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { StatusCode, getProducts } from "../store/shopping-cart/productSlice";

const Buy = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const response = useSelector((state) => state);
  // console.log("************response", response);
  const searchedProduct = response.products.data;
  // console.log(searchedProduct);

  // console.log("*********searchedProduct", searchedProduct, products);
  // const searchedProduct = products.slice(0, 2);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const searchedProduct = products.slice(0, 2);
  // console.log(searchedProduct);

  // const [pageNumber, setPageNumber] = useState(0);
  // const productPerPage = 4;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct?.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );

  // const pageCount = Math.ceil(searchedProduct?.length / productPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  // if (status === StatusCode.LOADING)
  //   return (

  //   );
  if (status === StatusCode.ERROR)
    return <h1 className="center">Something Went Wrong!</h1>;

  return (
    <Container>
      {status === StatusCode.LOADING ? (
        <div className="center">
          <Spinner color="danger">Loading...</Spinner>
        </div>
      ) : (
        <Row>
          {searchedProduct.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          {/* <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div> */}
        </Row>
      )}
    </Container>
  );
};

export default Buy;
