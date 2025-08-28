import logo from './Logo KMA.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import personalized from './one-on-one-person.avif'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import fearOfPublic from "./fear-of-speaking.webp"
import imposterSyndrome from "./imposter-syndrome.jpg"
import remoteWork from "./remote-work.jpg"
import aboutUsPhoto1 from "./Group-photo5.webp"
import aboutUsPhoto10 from "./Group-photo4.webp"
import aboutUsPhoto2 from "./Group-photo2.webp"
import aboutUsPhoto3 from "./Group-photo6.webp"
import aboutUsPhoto4 from "./Group-photo7.webp"
import aboutUsPhoto5 from "./Group-photo8.webp"
import aboutUsPhoto6 from "./Group-photo11.webp"
import aboutUsPhoto7 from "./Group-photo9.webp"
import aboutUsPhoto9 from "./Group-photo12.webp"
import aboutUsPhoto8 from "./Group-photo10.webp"
import JoinTeamBG from "./blurred-bokeh-light-dark-blue-background_219144-488-2.avif"
import teamMember1 from "./MP.jpeg"
import teamMember2 from "./Prophet.jpeg"
import teamMember3 from "./coach-hosanna.webp"
import teamMember4 from "./coach-antonio.jpeg"
import teamMember5 from "./treasure.webp"
import teamMember6 from "./nissi.webp"
import teamMember7 from "./theo.webp"
import teamMember8 from "./dhalia.webp"
import teamMember9 from "./lucious.webp"
import teamMember10 from "./glorified.webp"
import teamMember11 from "./mercy.webp"
import teamMember12 from "./ruby.webp"
import teamMember13 from "./leandry.webp"
import teamMember14 from "./chima.webp"
import teamMember15 from "./elijah.webp"

import astronaut from "./506b575739e90613428cdb399175e2c8-space-astronaut-cartoon.webp"
import notFoundBg from "./notfoundbg_LE_upscale_balanced_x4.jpg"

import eventImg1 from "./al-elmes-ULHxWq8reao-unsplash.webp"

import eventImg2 from "./andrea-mininni-VLlkOJdzLG0-unsplash.webp"

import eventImg3 from "./md-duran-rE9vgD_TXgM-unsplash.webp"

import GCashLogo from "./gcash-logo-brandlogos.net_arv9ck6s2.svg"
import BDOLogo from "./BDO_Unibank_(logo).svg.png"
import BpiLogo from "./bpi-logo-brandlogos.net_55rv03izx.svg"


 

export const assets = {
    logo,
    fearOfPublic,
    imposterSyndrome,
    remoteWork,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    personalized,
    aboutUsPhoto1,
    aboutUsPhoto2,
    aboutUsPhoto3,
    aboutUsPhoto4,
    aboutUsPhoto5,
    aboutUsPhoto6,
    aboutUsPhoto7,
    aboutUsPhoto8,
    aboutUsPhoto9,
    aboutUsPhoto10,
    JoinTeamBG,
    teamMember1,
    teamMember2,
    teamMember3,
    teamMember4,
    teamMember5,
    teamMember6,
    teamMember7,
    teamMember8,
    teamMember9,
    teamMember10,
    teamMember11,
    teamMember12,
    teamMember13,
    teamMember14,
    teamMember15,
    astronaut,
    notFoundBg,
    eventImg1,
    eventImg2,
    eventImg3,
    BDOLogo,
    GCashLogo,
    BpiLogo,
}

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];



// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/