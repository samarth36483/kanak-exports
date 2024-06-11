import { Box, Grid, Paper, Typography } from "@mui/material";
import Wave from "../components/wave.component";
import { getIcon } from "../theme/get-icon";
import { contact } from "../data/contact";
import InvertedWave from "../components/inveted-wave.component";
import ContactForm from "../components/contact-form";

const ContactPage = () => {
  return (
    <>
      <Box className="bg-prim_main text-text_sec py-6 px-8">
        <Typography variant="h3" className="text-center">
          Contact Us
        </Typography>
        <Typography variant="body1" className="mt-2 text-center">
          "Rock Your Enquiry: Fill Out Our Form!"
        </Typography>
      </Box>
      <InvertedWave />
      <Grid container spacing={4} className="px-6 pt-4 lg:px-16">
        <Grid item xs={12} sm={8}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">{contact.formDesc}</Typography>
        </Grid>
      </Grid>
      <Box className="relative top-2">
        <Wave />
      </Box>
      <Box className="bg-sec_main px-6 pb-6">
        <Typography variant="h4" className="font-bold text-center mb-4">
          Contact Details
        </Typography>
        <Typography className=" text-center mb-4">{contact.desc}</Typography>
        <Grid container spacing={4}>
          {contact.contacts.map((detail, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="p-6 rounded-large shadow-md transition-transform transform hover:scale-105">
                <Box className="rounded-full mb-4 text-center">
                  {getIcon(detail.icon, 48, "primary")}
                </Box>
                <Typography variant="h6" className="font-bold mb-2 text-center">
                  {detail.title}
                </Typography>
                <Typography variant="body2" className="text-center">
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

export default ContactPage;
