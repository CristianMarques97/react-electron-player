import { Box, Divider } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import MenuButton from "./components/MenuButton/MenuButton";
import useStyles from "./Styles";

export default function MainPage() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.menu}>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => console.log("click")}
              activated={false}
            >
              Agendamento
            </MenuButton>
          </Box>
          <Box className={classes.menuItem}>
            <Divider className={classes.divider} orientation="vertical" />
          </Box>
          <Box className={classes.menuItem}>
            <MenuButton
              onItemClick={() => console.log("click")}
              activated={true}
            >
              Playlist
            </MenuButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
