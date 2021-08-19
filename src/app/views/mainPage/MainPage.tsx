import { Box, Divider } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { ApplicationRoutes } from "../../constants/enums/AplicationRoutes";
import history from "../../router/history";
import PlaylistView from "../Playlists/Playlist";
import SchedulingView from "../Scheduling/Scheduling";
import MenuButton from "./components/MenuButton/MenuButton";
import useStyles from "./Styles";

export default function MainPage() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [route, setRoute] = React.useState<string>(
    ApplicationRoutes.Scheduling
  );

  const setPage = (router: string) => {
    setRoute(router);
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.menu}>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => setPage(ApplicationRoutes.Scheduling)}
              activated={route === ApplicationRoutes.Scheduling}
            >
              {t("Agendamento")}
            </MenuButton>
          </Box>
          <Box className={classes.menuItem}>
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => setPage(ApplicationRoutes.Playlist)}
              activated={route === ApplicationRoutes.Playlist}
            >
              {t("Playlist")}
            </MenuButton>
          </Box>
        </Box>
        {route === ApplicationRoutes.Scheduling ? (
          <SchedulingView />
        ) : (
          <PlaylistView />
        )}
      </Box>
    </Box>
  );
}
