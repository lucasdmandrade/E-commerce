import * as React from "react";
import { Button, Container } from "@material-ui/core";
import { Box, Divider, TextField } from "@mui/material";
import styles from "./styles.module.css";
import { currencyBRL } from "../../../utils/CurrencyRegex";

export interface IProps {
  totalValue: number;
}

const Footer = ({ totalValue }: IProps) => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        marginTop: "2em",
      }}
    >
      <h1 className={styles.formsTitle}>Dados do Cliente</h1>
      <Divider style={{ marginBottom: "0.8em" }} />

      <TextField
        required
        id="outlined-error-helper-text margin-normal"
        label="Nome"
        helperText="Incorrect entry."
        margin="normal"
        sx={{
          m: 1,
        }}
        style={{ width: "40%" }}
      />
      <TextField
        required
        id="outlined-error-helper-text margin-normal"
        label="Email"
        helperText="Incorrect entry."
        margin="normal"
        sx={{
          m: 1,
        }}
        style={{ width: "35%" }}
      />
      <TextField
        required
        id="outlined-select-currency"
        label="Sexo"
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}
        sx={{
          m: 1,
        }}
        style={{ width: "15%" }}
      >
        <option key="Select" value="Select" defaultChecked>
          Selecionar
        </option>
        <option key="Feminino" value="Feminino">
          Feminino
        </option>
        <option key="Masculino" value="Masculino">
          Masculino
        </option>
        <option key="undef" value="undef">
          Prefiro não selecionar
        </option>
        <option key="Other" value="Other">
          Outro
        </option>
      </TextField>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <h1 className={styles.formsTotalValue}>
          Total: R$ {currencyBRL(totalValue)}{" "}
        </h1>
        <Button variant="contained" color="primary" style={{ width: "28ch" }}>
          Finalizar compra
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
