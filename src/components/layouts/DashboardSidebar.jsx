import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@material-ui/core/styles";
import { Box, Link, Drawer, Typography, Avatar } from "@material-ui/core";
// components
// import Logo from '../../components/Logo';
import Scrollbar from "./Scrollbar";
// import NavSection from '../../components/NavSection';
// import { MHidden } from '../../components/@material-extend';
//
// import sidebarConfig from './SidebarConfig';
// import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
          {/* <Logo /> */}
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar />
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.primary" }}
              ></Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      {/* <NavSection navConfig={sidebarConfig} /> */}

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Box
          component="img"
          src="/static/illustrations/illustration_avatar.png"
          sx={{ width: 100, position: "absolute", top: -50 }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6">
            texto
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            texto
          </Typography>
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {/* <MHidden width="lgUp"> */}
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: { width: DRAWER_WIDTH },
        }}
      >
        {renderContent}
      </Drawer>
      {/* </MHidden> */}

      {/* <MHidden width="lgDown"> */}
      <Drawer
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: "background.default",
          },
        }}
      >
        {renderContent}
      </Drawer>
      {/* </MHidden> */}
    </RootStyle>
  );
}
