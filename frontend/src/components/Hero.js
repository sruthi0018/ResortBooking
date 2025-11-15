import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import BookingDialog from "./BookNowDialog";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Paradise Resort
      </Typography>
      <Typography variant="h5" mt={2}>
        Escape • Relax • Rejuvenate
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1.2rem",backgroundColor:'#000' }}
        onClick={() => setOpen(true)}
      >
        Book Now
      </Button>
      <BookingDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Hero;
