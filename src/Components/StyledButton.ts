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
