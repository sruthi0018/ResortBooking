import { Box, Grid, Typography } from "@mui/material";

const images = ["assets/one.jpg", "assets/two.jpg", "assets/three.jpg"];

const Gallery = () => {
  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
        Gallery
      </Typography>

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {images.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          >
            <img
              src={img}
              alt="Resort"
              style={{
                width: "100%",
                height: "260px",
                borderRadius: 10,
                objectFit: "cover",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
