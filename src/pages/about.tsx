import { Box, Grid, Paper, Typography } from "@mui/material";
import InvertedWave from "../components/inveted-wave.component";
import { about } from "../data/about";
import Wave from "../components/wave.component";
import Carousel from "../components/coursel";

const AboutPage = () => {
  return (
    <>
      <Box className="bg-prim_main text-text_sec py-6 px-8">
        <Typography variant="h3" className="text-center">
          About Us
        </Typography>
      </Box>
      <InvertedWave />
      <Paper className="p-6 rounded-xl shadow-lg max-w-[64rem] mx-auto relative lg:bottom-[6rem]">
        <Typography
          variant="h4"
          className="font-bold mb-2 text-center text-prim_main"
        >
          {about.descTitle}
        </Typography>
        {about.desc.map((desc, index) => (
          <Typography key={index} variant="body1" className="text-center mb-4">
            {desc}
          </Typography>
        ))}
      </Paper>
      <Box className="p-6 lg:py-0">
        <Typography variant="h4" className="font-bold text-center mb-4">
          Factory Overview
        </Typography>
        <Carousel images={about.factory} />
      </Box>
      <Box className="relative top-2">
        <Wave />
      </Box>
      <Box className="bg-sec_main p-6 lg:px-16">
        <Typography variant="h4" className="font-bold text-center mb-4">
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {about.values.map((detail, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper className="p-6 rounded-large shadow-md">
                <Box className="mb-2 flex items-baseline">
                  <Typography
                    variant="h4"
                    className="border-4 border-solid border-prim_main p-2 mr-2 text-prim_main font-bold"
                  >
                    {index + 1}.
                  </Typography>
                  <Typography variant="h5">{detail.title}</Typography>
                </Box>
                <Typography variant="body2" className="min-h-16">
                  {detail.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AboutPage;
