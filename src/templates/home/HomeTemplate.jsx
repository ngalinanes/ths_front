import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// material
import { styled } from "@material-ui/core/styles";
//
// import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from "../../components/layouts/DashboardSidebar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const HomeTemplate = () => {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      {/* <DashboardNavbar onOpenSidebar={() => setOpen(true)} /> */}
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <h1>Bienvenido/a a Tu hogar Sustentable THS</h1>
      </MainStyle>
    </RootStyle>
  );
};

export default HomeTemplate;
