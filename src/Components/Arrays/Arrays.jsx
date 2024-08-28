// Importing the images
import Image1 from "../../Images/rev.jpg";
import Image2 from "../../Images/elder1.jpg";
import Image3 from "../../Images/elder2.jpg";
import Image4 from "../../Images/elder3.jpg";
import church1 from "../../Images/mukinyi.jpg";
import church2 from "../../Images/church2.jpg";
import church3 from "../../Images/church3.jpg";
import church4 from "../../Images/church4.jpg";
import Mukinyi1 from "../../Images/mukinyi1.jpg";

import BibleStudy from "../../Images/bible.jpg";
import Worship from "../../Images/worship.jpg";
import HolyWeek from "../../Images/holyweek.jpg";
import Crusade from "../../Images/crusade.jpg";

import ChurchIcon from "@mui/icons-material/Church";
import HouseIcon from "@mui/icons-material/House";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export const DistrictArray = [
  { district: "Wendo", elder: "Elder Paul Thairu" },
  { district: "Utugi", elder: "Elder David Muiruri" },
  { district: "Ebenezer", elder: "Elder Maina" },
  { district: "Witikio", elder: "Elder Eustace Kiarie" },
  { district: "Hekima", elder: "Elder " },
  { district: "Mwangaza", elder: "Elder " },
  { district: "Baraka", elder: "Elder Zackariah Kori" },
  { district: "Shammah", elder: "Elder Samuel Kigotho" },
  { district: "Ushindi", elder: "Elder John Kihumba" },
  { district: "Kirigiriro", elder: "Elder Joseph Mugweru" },
  { district: "Kirathima", elder: "Elder Ann Njoroge" },
  { district: "Highway", elder: "Elder " },
];
// An array of the leaders annd their props
export const Leaders = [
  {
    name: "Rev. Emmanuel Nkoitiko",
    title: "Session Moderator",
    image: Image1,
  },
  {
    name: "Elder Caroline Gichuki",
    title: "Session Clerk",
    image: Image2,
    congregation: "Neema",
  },
  {
    name: "Elder David Muiruri",
    title: "Session Co-Clerk",
    image: Image3,
    congregation: "Mukinyi",
  },
  {
    name: "Elder Grace Benson",
    title: "Finance Chair",
    image: Image4,
    congregation: "Highway",
  },
  {
    name: "Elder Simon Kigotho",
    title: "Parish Treasurer",
    image: Image2,
    congregation: "BHC",
  },
  {
    name: "Elder Eng. ",
    title: "Parish Treasurer",
    image: Image2,
    congregation: "Neema",
  },
  {
    name: "Elder John Kihumba",
    image: Image3,
    congregation: "BHC",
  },
  {
    name: "Elder Zachariah Kori",
    title: "Registrar - BHC",
    image: Image2,
    congregation: "BHC",
  },
  {
    name: "Elder David Mwangi",
    image: Image3,
    title: "Registrar - Neema Church",
    congregation: "Neema",
  },
];

export const CardList = [
  { title: "Mukinyi Church", image: church1, link: "/churches/mukinyi-church" },
  { title: "Neema Church", image: church2, link: "/churches/neema-church" },
  {
    title: "Blessed Hope Church",
    image: church3,
    link: "/churches/blessed-hope-church",
  },
  { title: "Highway Church", image: church4, link: "/churches/highway-church" },
];
export const Beliefs = [
  {
    title: "Mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Theme",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

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
    icon: <GroupsIcon />,
    title: "Church Groups",
    text: "Join a group to serve the in the body of Christ.",
    buttontext: "Find a group",
    path: "/join-a-ministry",
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

export const mukinyiServiceArray = [
  { time: "8:30am - 10:30am", title: "English Service" },
  { time: "10:40am - 1:00pm", title: "Kiswahili Service" },
  { time: "10:30am - 12:30pm", title: "Youth Service" },
  { time: "8:30am - 10:00am", title: "Church School" },
];

export const neemaServiceArray = [
  { time: "8:30am - 10:30am", title: "English Service" },
  { time: "10:40am - 1:00pm", title: "Kiswahili Service" },
  { time: "8:30am - 10:00am", title: "Church School" },
];

export const bhcServiceArray = [
  { time: "8:30am - 10:30am", title: "English Service" },
  { time: "10:40am - 1:00pm", title: "Kiswahili Service" },
  { time: "8:00am - 9:00am", title: "Church School" },
];

export const highwayServiceArray = [
  { time: "8:30am - 10:30am", title: "English Service" },
  { time: "10:40am - 1:00pm", title: "Kiswahili Service" },
  { time: "8:30am - 10:00am", title: "Church School" },
];

export const events = [
  {
    id: 1,
    image: BibleStudy,
    title: "Women's Bible Study",
    location: "Blessed Hope Church",
    date: "01/03.2024",
    frequency: "Monthly",
    startTime: "7pm",
    endTime: "8pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    image: Worship,
    title: "Youth Worship Experience",
    location: "Highway Church",
    date: "7/04/2024",
    frequency: "Once",
    startTime: "7pm",
    endTime: "8pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: HolyWeek,
    title: "Holy Week",
    location: "Mukinyi Church",
    date: "",
    frequency: "All Week",
    startTime: "7pm",
    endTime: "8pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    image: Crusade,
    title: "Evangelical Crusade",
    location: "Neema Church",
    date: "29/03/2024",
    frequency: "3 Days",
    startTime: "7pm",
    endTime: "8pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export const highwayContacts = [
  { type: "email", contact: "highway@email.com" },
  { type: "phone", contact: "+254 7xx xxx" },
];
export const mukinyiContacts = [
  { type: "email", contact: "mukinyi@email.com" },
  { type: "phone", contact: "+254 7xx xxx" },
];

export const neemaContacts = [
  { type: "email", contact: "neema@email.com" },
  { type: "phone", contact: "+254 7xx xxx" },
];

export const bhcContacts = [
  { type: "email", contact: "bhc@email.com" },
  { type: "phone", contact: "+254 7xx xxx" },
];
export const contacts = [
  {
    tile: "youth",
    type: "E-Mail Address",
    contact: "mukinyiyouth254@gmail.com",
  },
  { tile: "pcmf", type: "E-Mail Address", contact: "pcmf@gmail.com" },
];

export const parishAccInfo = [
  { type: "MPesa Paybill Number", number: "247247" },
  {
    type: "Account Number",
    number: "0710291",
  },
];
export const mukinyiAccInfo = [
  { type: "MPesa Paybill Number", number: "247247" },
  {
    type: "Account Number",
    number: "124134# then add your Name or District or District Number",
  },
];
export const highwayAccInfo = [
  { type: "MPesa Paybill Number", number: "247247" },
  {
    type: "Account Number",
    number: "0710284520469",
  },
];
export const neemaAccInfo = [
  { type: "MPesa Paybill Number", number: "124134" },
  {
    type: "Account Number",
    number: "# then add your Name or District or District Number",
  },
];
export const bhcAccInfo = [
  { type: "MPesa Paybill Number", number: "124134" },
  {
    type: "Account Number",
    number: "# then add your Name or District or District Number",
  },
];
export const mukinyiCarousel = [
  {
    id: 1,
    image: church1,
    title: "Mukinyi Church",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Mukinyi1,
    title: "Mukinyi Church",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
import sport from "../../Images/sports.jpg";
import worship from "../../Images/we.jpg";
import youthWeek from "../../Images/youth-week.jpg";
export const youthCarousel = [
  {
    id: 1,
    image: sport,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: worship,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: youthWeek,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
