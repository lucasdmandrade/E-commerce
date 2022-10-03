import * as React from "react";
import { Container } from "@material-ui/core";
import { Box, Divider, TextField } from "@mui/material";
import styles from "./styles.module.css";
import { currencyBRL } from "../../../utils/CurrencyRegex";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../Components/StyledButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectName, setName } from "../../../features/nameFeature/NameSlice";
import { useEffect, useState } from "react";

export interface IProps {
  totalValue: number;
}

const Footer = ({ totalValue }: IProps) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("Select");
  const [isFormIncompleted, setIsFormIncompleted] = useState<boolean>();
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setName(userName));
  }, [dispatch, userName]);

  const goFinalizedPurchasePage = () => {
    if (!userName || !userEmail || userGender === "Select") {
      alert("Complete o formulario");
      setIsFormIncompleted(true);
      return;
    }
    setIsFormIncompleted(false);
    navigate("/finalização-de-compra");
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        marginTop: "2em",
        marginBottom: "2em",
      }}
    >
      <h1 className={styles.formsTitle}>Dados do Cliente</h1>
      <Divider style={{ marginBottom: "0.8em" }} />

      <TextField
        required
        error={isFormIncompleted && !userName}
        label="Nome"
        margin="normal"
        onChange={({ target }) => setUserName(target.value)}
        sx={{
          m: 1,
        }}
        style={{ width: "40%" }}
      />
      <TextField
        required
        error={isFormIncompleted && !userEmail}
        label="Email"
        margin="normal"
        onChange={({ target }) => setUserEmail(target.value)}
        sx={{
          m: 1,
        }}
        style={{ width: "35%" }}
      />
      <TextField
        required
        error={isFormIncompleted && userGender === "Select"}
        onChange={({ target }) => setUserGender(target.value)}
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
          Total: {currencyBRL(totalValue)}{" "}
        </h1>
        <StyledButton
          variant="contained"
          style={{ width: "28ch" }}
          onClick={goFinalizedPurchasePage}
        >
          Finalizar compra
        </StyledButton>
      </Container>
    </Box>
  );
};

export default Footer;
