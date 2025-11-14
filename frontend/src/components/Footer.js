import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        py: 4,
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="h6">Contact Us</Typography>
      <Typography>Email: support@paradiseresort.com</Typography>
      <Typography>Phone: +91 98765 43210</Typography>

      <Box sx={{ mt: 2 }}>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
      </Box>

      <Typography mt={2} variant="body2">
        © {new Date().getFullYear()} Paradise Resort — All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
