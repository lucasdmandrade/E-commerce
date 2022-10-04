import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import { Divider } from "@mui/material";
import styles from "./styles.module.css";
import products from "./populateProducts";
import { IProducts } from "./populateProducts/types";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCount,
  setAmount,
} from "../../features/totalValueCounter/CounterSlice";

const Product = () => {
  const [isProductPaperActive, setIsProductPaperActive] = useState<boolean[]>(
    []
  );
  const [productsQuantitySelected, setproductsQuantitySelected] = useState<
    number[]
  >([]);

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const updateActivePaper = (index?: number) => {
    let prodctActiveArray: boolean[] = [];
    products.map(() => prodctActiveArray.push(false));
    if (typeof index !== "undefined") {
      prodctActiveArray[index] = true;
    }
    setIsProductPaperActive(prodctActiveArray);
  };

  const updateProductQuantityList = (index: number, newQuantity: number) => {
    if (newQuantity < 0) return;
    let prodctQuantityArray: number[] = productsQuantitySelected;
    prodctQuantityArray[index] = newQuantity;
    setproductsQuantitySelected(prodctQuantityArray);
  };

  useEffect(() => {
    let totalValue = 0;
    productsQuantitySelected.find((quantity, index) => {
      totalValue += quantity * products[index].price;
    });
    dispatch(setAmount(totalValue));
  });

  useEffect(() => {
    products.map(() => {
      updateActivePaper();
      let productQuantityArray: number[] = [];
      products.map(() => productQuantityArray.push(0));
      setproductsQuantitySelected(productQuantityArray);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <h1 className={styles.conteinerTitler}>Produtos</h1>
      <Divider />
      <Grid container spacing={2}>
        {products.map((product: IProducts, index: number) => (
          <ProductCard
            product={product}
            index={index}
            updateActivePaper={updateActivePaper}
            isProductPaperActive={isProductPaperActive}
            updateProductQuantityList={updateProductQuantityList}
            productsQuantitySelected={productsQuantitySelected}
          />
        ))}
      </Grid>
      <Footer totalValue={count} />
    </Container>
  );
};

export default Product;
