import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import AnchorIcon from "@mui/icons-material/Anchor";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const getIcon = (
  icon: string,
  fontSize: number = 24,
  color: "primary" | "inherit" | "secondary" | "error" | "success" = "inherit"
) => {
  switch (icon) {
    case "phone":
      return <LocalPhoneIcon sx={{ fontSize }} color={color} />;
    case "whatsApp":
      return <WhatsAppIcon sx={{ fontSize }} color={color} />;
    case "email":
      return <EmailIcon sx={{ fontSize }} color={color} />;
    case "language":
      return <LanguageIcon sx={{ fontSize }} color={color} />;
    case "anchor":
      return <AnchorIcon sx={{ fontSize }} color={color} />;
    case "centerFocus":
      return <CenterFocusStrongIcon sx={{ fontSize }} color={color} />;
    case "location":
      return <LocationOnIcon sx={{ fontSize }} color={color} />;
    default:
      return <></>;
  }
};
