import { Box, Grid, Paper, Typography } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import HikingIcon from "@mui/icons-material/Hiking";
import SpaIcon from "@mui/icons-material/Spa";

const services = [
  { title: "Accommodation", icon: <HotelIcon sx={{ fontSize: 40 }} /> },
  { title: "Adventure Activities", icon: <HikingIcon sx={{ fontSize: 40 }} /> },
  { title: "Wellness & Spa", icon: <SpaIcon sx={{ fontSize: 40 }} /> },
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 8, px: 3 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
        Our Services
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {services.map((service) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={service.title}
            textAlign="center"
          >
            <Paper
              elevation={4}
              sx={{
                height: 120,
                width: 120,
                mx: "auto",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              {service.icon}
            </Paper>
            <Typography variant="subtitle1" mt={2} fontWeight="600">
              {service.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
