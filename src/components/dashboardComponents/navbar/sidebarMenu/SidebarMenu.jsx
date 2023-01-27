import * as React from "react";
import Box from "@mui/material/Box";
import {
  Analytics,
  DataObject,
  GridView,
  GroupAdd,
  Groups,
  Home,
  IntegrationInstructions,
  Label,
  Language,
  Mail,
  Map,
  Settings,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import {
  StyledUnselectedNavMenu,
  StyledSelectedNavMenu,
} from "../Navbar.styled";

export const SidebarMenu = () => {
  const router = useRouter();

  const menu1 = [
    {
      title: "Home",
      url: "dashboard",
      icon: <Home />,
    },

    {
      title: "Projects",
      url: "projects",
      icon: <GridView />,
    },
    {
      title: "Issues",
      url: "projects",
      icon: <DataObject />,
    },
    {
      title: "Messages",
      url: "projects",
      icon: <Mail />,
    },
    {
      title: "Roadmap",
      url: "projects",
      icon: <Map />,
    },
    {
      title: "Teams",
      url: "projects",
      icon: <Groups />,
    },
    {
      title: "Reports",
      url: "projects",
      icon: <Analytics />,
    },
    {
      title: "Labels",
      url: "projects",
      icon: <Label />,
    },
  ];

  const menu2 = [
    {
      title: "Settings",
      url: "dashboard",
      icon: <Settings />,
    },

    {
      title: "Integrations",
      url: "projects",
      icon: <IntegrationInstructions />,
    },
    {
      title: "Help",
      url: "projects",
      icon: <Language />,
    },
    {
      title: "Invite Users",
      url: "projects",
      icon: <GroupAdd />,
    },
  ];
  function SelectedMenu({ title, icon, url }) {
    return (
      <StyledSelectedNavMenu
        variant="contained"
        startIcon={icon}
        size="small"
        disableElevation
        sx={{ width: "200px" }}
      >
        {title}
      </StyledSelectedNavMenu>
    );
  }

  function UnSelectedMenu({ title, icon, url }) {
    return (
      <StyledUnselectedNavMenu
        variant="contained"
        startIcon={icon}
        size="small"
        fullWidth
        disableElevation
      >
        {title}
      </StyledUnselectedNavMenu>
    );
  }

  return (
    <div>
      {
        <SelectedMenu
          title={menu1[0].title}
          icon={menu1[0].icon}
          key={0}
          url={menu1[0].url}
          id="defaultMenu"
        />
      }
      {menu1.map((item, i) =>
        router.pathname === item.url ? (
          <SelectedMenu
            title={item.title}
            icon={item.icon}
            key={i}
            url={item.url}
          />
        ) : (
          <UnSelectedMenu
            title={item.title}
            icon={item.icon}
            key={i}
            url={item.url}
          />
        )
      )}

      <Box sx={{ height: "80px", color: "white" }} />
      {menu2.map((item, i) =>
        router.pathname === item.url ? (
          <SelectedMenu
            title={item.title}
            icon={item.icon}
            key={i}
            url={item.url}
          />
        ) : (
          <UnSelectedMenu
            title={item.title}
            icon={item.icon}
            key={i}
            url={item.url}
          />
        )
      )}
    </div>
  );
};
