import * as React from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, InputBase, Stack, useMediaQuery } from "@mui/material";
import {
  AccessTime,
  CurrencyBitcoin,
  Email,
  Home,
  SearchOffRounded,
  SearchRounded,
} from "@mui/icons-material";
import TopDash from "./Navbar";
import Navbar from "./Navbar";
import CleanLogo from "../../assets/clean.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/home.png";
import MessageIcon from "../../assets/message.png";
import PayrollIcon from "../../assets/payroll.png";
import ClockIcon from "../../assets/clock.png";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const menuItem = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/dashboard",
  },
  {
    name: "Payroll",
    icon: PayrollIcon,
    link: "/dashboard/payroll",
  },
  {
    name: "Scheduler",
    icon: ClockIcon,
    link: "/dashboard/schedular",
  },
  {
    name: "Messages",
    icon: MessageIcon,
    link: "/dashboard/worksite",
  },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 4),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function RootLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [querySearch, setQuerySearch] = React.useState("");

  // Detect screen size using `useMediaQuery`
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Automatically close the drawer if screen size is below `lg`
  React.useEffect(() => {
    if (!isLgScreen) {
      setOpen(false);
    }
  }, [isLgScreen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Stack direction={"row"}>
          <Navbar
            onChange={(e) => setQuerySearch(e.target.value)}
            value={querySearch}
            close={handleDrawerClose}
            onClick={open ? handleDrawerClose : handleDrawerOpen}
          />
        </Stack>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#06726A",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{}}>
          <Link to={"/"}>
            <img
              src={CleanLogo}
              alt="clean logo"
              className="w-[105px] h-[22px] "
            />
          </Link>
        </DrawerHeader>

        <List>
          {menuItem.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <ListItem key={item.name} component={Link} to={item.link}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: isActive ? "white" : "grey",
                      width: "16px",
                      height: "18px",
                      my: "auto",
                    }}
                  >
                    <img
                      src={item.icon}
                      style={{
                        color: isActive ? "white" : "grey",
                      }}
                      alt={item.name}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      color: isActive ? "white" : "grey",
                      fontSize: "16px",
                      fontWeight: isActive ? "bold" : "500",
                      mt: "12px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet context={{ querySearch }} />
      </Main>
    </Box>
  );
}
