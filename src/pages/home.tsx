import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { home } from "../data/home";
import { getIcon } from "../theme/get-icon";
import Wave from "../components/wave.component";
import InvertedWave from "../components/inveted-wave.component";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container className="bg-prim_main text-text_sec p-8">
        <Grid item xs={12} md={6}>
          <Typography variant="h3">{home.subTitle}</Typography>
          <Typography variant="subtitle1" className="my-4">
            {home.description}
          </Typography>
          <Button
            variant="contained"
            className="bg-prim_light mt-2 py-2 px-6 rounded-2xl mb-4 lg:mb-0"
            onClick={() => navigate("/about")}
          >
            More About Us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={home.img}
            alt={home.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-3xl"
          />
        </Grid>
      </Grid>
      <InvertedWave />
      {home.sections.map((section, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          className="my-10 px-6 lg:mt-0"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            className={`${index % 2 === 0 ? "md:order-last" : ""}`}
          >
            <Box className="overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="font-bold mb-2 text-center">
              {section.title}
            </Typography>
            <Typography variant="body1" className="text-center">
              {section.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Box className="relative top-2">
        <Wave />
      </Box>
      <Box className="bg-sec_main px-6 pb-6">
        <Typography variant="h4" className="font-bold text-center mb-4">
          Quality and Management
        </Typography>
        <Typography className=" text-center mb-4">
          {home.qualityDesc}
        </Typography>
        <Grid container spacing={4}>
          {home.quality.map((detail, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="p-6 rounded-large shadow-md transition-transform transform hover:scale-105">
                <Box className="rounded-full mb-4 text-center">
                  {getIcon(detail.icon, 48, "primary")}
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-center">
                  {detail.title}
                </Typography>
                <Typography variant="body1" className="min-h-36 text-center">
                  {detail.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="px-6 py-6">
        <Typography variant="h4" className="font-bold text-center mb-4">
          Take a Factory Tour
        </Typography>
        <Typography className=" text-center mb-4">
          {home.factoryDesc}
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {home.factory.map(item => (
            <ImageListItem key={item}>
              <img src={item} alt={item} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Grid
        container
        spacing={4}
        className="p-6 bg-prim_main text-text_sec lg:p-12"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Typography variant="h4" className="font-bold">
            For product pricing, OEM customization, or other inquiries!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            className="bg-prim_light mt-2 py-2 px-6 rounded-2xl"
            onClick={() => navigate("/contact")}
          >
            <Typography variant="subtitle2" className="font-bold">
              Contact Us
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
