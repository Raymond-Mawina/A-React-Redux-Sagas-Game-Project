import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <Box data-testid="Header" marginBottom={"20px"}>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h4"
            margin={"auto"}
            style={{ fontWeight: "bold" }}
          >
            EscapeWithGold
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
