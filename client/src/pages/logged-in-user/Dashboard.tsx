import {
  ArrowLeftEndOnRectangleIcon,
  TvIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Home, Settings, Person } from "@mui/icons-material";
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

const Dashboard = () => {
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

  const menuItems = [
    { text: "Dashboard", icon: <TvIcon className="w-6 h-6 text-white"/> },
    { text: "Profile", icon: <UserCircleIcon className="w-6 h-6 text-white" /> },
    { text: "Settings", icon: <Settings /> },
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
              "linear-gradient(to top, black 55%, #222 85%, #444 100%)",
            backdropFilter: "blur(4px)",
            color: "white",
            fontWeight: "500",
          },
        }}
      >
        <div className="flex items-center">
          <img src={assets.logo} alt="logo" className={`w-15 h-15`} />
          <h1 className="font-bold text-2xl text-amber-200">KMA</h1>
        </div>
        <div className="flex items-center justify-between bg-gray-500 m-4 p-2 text-white rounded-xl">
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
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
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
      </Drawer>
    </ThemeProvider>
  );
};

export default Dashboard;
