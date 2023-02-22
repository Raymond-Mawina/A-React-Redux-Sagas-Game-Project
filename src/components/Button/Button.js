import { Button } from "@mui/material";

function ButtonComponent() {
  return (
    <Button
      style={{ marginLeft: "190px" }}
      variant="contained"
      onClick={() => window.location.reload()}
      data-testid="Button"
    >
      PLAY AGAIN
    </Button>
  );
}

export default ButtonComponent;
