import ChurchIcon from "@mui/icons-material/Church";
import HouseIcon from "@mui/icons-material/House";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export const gridItems = [
  {
    icon: <ChurchIcon />,
    title: "Parish Congregations",
    text: "Join us as we gather in any of our congregations.",
    buttontext: "Locate a church",
    path: "/churches",
    type: "link",
  },
  {
    icon: <HouseIcon />,
    title: "District Fellowships",
    text: "Locate your small group to have an intimate fellowship.",
    buttontext: "Find your district",
    path: "/districts",
    type: "link",
  },
  {
    icon: <VolunteerActivismIcon />,
    title: "Be a giver",
    text: "Experience God's love through your generosity.",
    buttontext: "Give Generously",
    type: "modal",
  },
];
