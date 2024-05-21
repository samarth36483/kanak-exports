import { Typography, Link, Box, Grid } from "@mui/material";
import { home } from "../data/home";
import { getIcon } from "../theme/get-icon";
import { footer } from "../data/footer";

const Footer = () => {
  return (
    <footer className={"bg-prim_dark text-text_sec px-6 py-4"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box>
            <img src={home.logo} alt={home.title} className="w-20 h-20" />
            <Typography variant="h4">{home.title}</Typography>
            <Typography variant="body2">
              &#169; 2024 {home.title}. All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" mb={1}>
            Company Links
          </Typography>
          {footer.links.map(link => (
            <Box key={link.text}>
              <Link
                underline="none"
                href={link.link}
                className="text-text_sec hover:text-gray-400 mb-1"
              >
                {link.text}
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" mb={1}>
            Contact
          </Typography>
          {footer.contacts.map(detail => (
            <Typography key={detail.text} className="text-text_sec mb-1 ">
              <span className="align-top mr-2">{getIcon(detail.icon)}</span>
              <span>{detail.text}</span>
            </Typography>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
