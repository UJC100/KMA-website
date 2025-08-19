import {
  ArrowLeftEndOnRectangleIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TvIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Figtree, sans-serif",
      fontWeightMedium: 500,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "Figtree, sans-serif",
          },
        },
      },
    },
  });
  const menuIconClassName = "w-7 h-7 text-white";
  const pTagsClassName = "m-4 mt-6 text-gray-400 text-sm";
  const yourSpacemenuItems = [
    { text: "Dashboard", icon: <TvIcon className={menuIconClassName} /> },
    { text: "Profile", icon: <UserCircleIcon className={menuIconClassName} /> },
    {
      text: "Account Settings",
      icon: <Cog6ToothIcon className={menuIconClassName} />,
    },
    {
      text: "Session Manager",
      icon: <ChatBubbleBottomCenterIcon className={menuIconClassName} />,
    },
    { text: "Bookshelf", icon: <BookOpenIcon className={menuIconClassName} /> },
    { text: "Event", icon: <SparklesIcon className={menuIconClassName} /> },
  ];

  const discoverMenuItems = [
    {
      text: "AboutUs",
      icon: <QuestionMarkCircleIcon className={menuIconClassName} />,
    },
    { text: "Contact", icon: <PhoneIcon className={menuIconClassName} /> },
    { text: "Bookshelf", icon: <BookOpenIcon className={menuIconClassName} /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 300,
            boxSizing: "border-box",
            background:
              "linear-gradient(to top, black 0%, #222 70%, #444 100%)",
            backdropFilter: "blur(4px)",
            color: "white",
            fontWeight: "500",
            // paddingY: "1rem",
          },
        }}
      >
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className={`w-15 h-15`} />
          <h1 className="font-semibold text-2xl text-amber-200">KMA</h1>
        </div>
        <div className="flex items-center justify-between bg-gray-600 m-4 p-2 text-white rounded-xl">
          <div className="flex items-center gap-2">
            <span className="bg-purple-400 w-10 h-10 flex items-center justify-center rounded-full ">
              J
            </span>
            <h2>John</h2>
          </div>

          <div className="flex items-center gap-3">
            <UserCircleIcon className="w-6 h-6" />
            <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
          </div>
        </div>
        <p className={pTagsClassName}>Your Space</p>
        <List>
          {yourSpacemenuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#daa425",
                    color: "black",
                  },
                }}
              >
                <ListItemIcon >{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  slotProps={{
                    primary: { sx: { fontWeight: "medium" } },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <p className={pTagsClassName}>Discover</p>
        <List>
          {discoverMenuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{
                  "&:hover": {
                    backgroundColor: "#daa425",
                    color: "black",
                  },
                }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  slotProps={{
                    primary: { sx: { fontWeight: "medium" } },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <hr className="text-gray-700"/>
        <div className="flex items-center gap-2 mx-1 mt-2 p-3 hover:bg-gray-700 hover:rounded-lg cursor-pointer">
          <span><ChevronDoubleLeftIcon className='w-6 h-6'/></span>
          <h3 className="text-sm">Collapse</h3>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
