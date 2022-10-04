import { Button, ButtonProps } from "@material-ui/core";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#f18f4d",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#d46c26",
  },
  p: {
    textDecoration: "none",
    color: "blue",
    margin: 0,
  },
}));

export const ChangeValueButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "100%",
  minWidth: "30px",
  minHeight: "30px",
  "&:hover": {
    backgroundColor: "#6d5a5a3f",
  },
}));
