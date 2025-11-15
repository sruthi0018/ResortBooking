import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Paradise Resort
        </Typography>

        <div>
          <Button color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
            Home
          </Button>

          <Button color="inherit" component={Link} to="/admin">
            Admin
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
