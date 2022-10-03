import { Button, Container } from "@material-ui/core";
import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../../features/totalValueCounter/CounterSlice";
import { currencyBRL } from "../../utils/CurrencyRegex";
import Purchase from "../../assets/purchase.png";
import styles from "./styles.module.css";
import { StyledButton } from "../../Components/StyledButton";
import { selectName } from "../../features/nameFeature/NameSlice";

const FinalizePurchase = () => {
  const count = useAppSelector(selectCount);
  const name = useAppSelector(selectName);
  console.log(name);

  return (
    <Container
      className={styles.conteiner}
      maxWidth="xs"
      style={{ display: "flex" }}
    >
      <h1 className={styles.BuyerName}>{name}, </h1>
      <h2 className={styles.FinalizedPurchaseText}>
        Sua compra no valor{" "}
        <span className={styles.TextBlue}>{currencyBRL(count)}</span> foi
        finalizada com sucesso
      </h2>
      <img
        className={styles.FinalizedPurchaseImage}
        src={Purchase}
        alt="check confirmando compra"
      />
      <StyledButton variant="contained" style={{ width: "28ch" }} href="/">
        Iniciar nova compra
      </StyledButton>
    </Container>
  );
};

export default FinalizePurchase;
