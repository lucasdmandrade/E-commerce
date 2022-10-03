import * as React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import styles from "./styles.module.css";
import AddIcon from "../../../assets/addIcon.svg";
import SubtractIcon from "../../../assets/subtractIcon.svg";
import { currencyBRL } from "../../../utils/CurrencyRegex";
import { IProducts } from "../populateProducts/types";

interface IProps {
  product: IProducts;
  index: number;
  updateActivePaper: (index?: number) => void;
  isProductPaperActive: boolean[];
  updateProductQuantityList: (index: number, newQuantity: number) => void;
  productsQuantitySelected: number[];
}

const ProductCard = ({
  product,
  index,
  updateActivePaper,
  isProductPaperActive,
  updateProductQuantityList,
  productsQuantitySelected,
}: IProps) => {
  console.log("teste", isProductPaperActive);
  console.log("teste2", index);
  return (
    <Grid item xs={6} md={3} lg={3} sm={4}>
      <Paper
        elevation={0}
        className={styles.paperProductContent}
        onClick={() => updateActivePaper(index)}
      >
        <img
          className={styles.paperImg}
          src={product.img}
          alt="Imagem do produto"
        />
        <div className={isProductPaperActive[index] ? styles.PopUp : ""}>
          <h2 className={styles.paperProductTitle}>{product.title}</h2>
          <h1 className={styles.paperProductPrice}>
            {currencyBRL(product.price)}
          </h1>
          <h2 className={styles.paperProductPriceDetails}>
            {product.priceInstallmentsDetails}
          </h2>
          <h2 className={styles.paperProductPriceDetails}>
            {product.priceAtSightDetails}
          </h2>
          <Box
            className={
              isProductPaperActive[index]
                ? styles.paperFooterContainer
                : styles.hide
            }
          >
            <Box
              className={styles.paperChangeProductQuantityContainer}
              sx={{ "& .MuiInputBase-input": { textAlign: "center" } }}
            >
              <Button
                onClick={() =>
                  updateProductQuantityList(
                    index,
                    productsQuantitySelected[index] - 1
                  )
                }
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
              >
                <img src={SubtractIcon} alt="Icone para remover produtos" />
              </Button>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={productsQuantitySelected[index]}
                sx={{ textAlign: "center" }}
                onChange={(e) =>
                  updateProductQuantityList(index, Number(e.target.value))
                }
                disabled
              />
              <Button
                onClick={() =>
                  updateProductQuantityList(
                    index,
                    productsQuantitySelected[index] + 1
                  )
                }
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                }}
              >
                <img src={AddIcon} alt="Icone para adicionar produtos" />
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px", width: "100%" }}
            >
              Adicionar
            </Button>
          </Box>
        </div>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
