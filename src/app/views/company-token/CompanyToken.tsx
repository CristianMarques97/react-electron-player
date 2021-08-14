import { Box, Card, Grid, TextField, Typography } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import SubmitButton from "./components/SubmitButton";
import TokenInput from "./components/TokenInput";
import AppAssets from "../../constants/Assets";
import useStyles from "./Styles";

export default function CompanyTokenView({ history }: any) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [token, setToken] = React.useState<string[]>(new Array(6));

  const setTokenValue = (value: string, index: number) => {
    const tokenArray = token;
    tokenArray[index] = value;
    setToken(tokenArray);
  };

  const submit = () => {
    console.log(token);
    history.push("/main-page");
  };

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={1} md={3} />
        <Grid item xs={10} md={6} className={classes.center}>
          <Card className={classes.card}>
            <Box className={classes.logoBox}>
              <img
                className={classes.logo}
                src={`${AppAssets.URL}2idLogo.png`}
              />
            </Box>
            <Typography className={classes.topSpacing} />
            <Box className={classes.boxTitle}>
              <Typography className={classes.title}>
                {t(
                  "Digite abaixo o código de sua loja recebido por e-mail ao efetuar o cadastro"
                )}
              </Typography>
            </Box>
            <Box className={classes.topSpacing}>
              <Grid container>
                <Grid item xs={5}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <TokenInput
                          autoFocus
                          tabIndex={0}
                          value={token[0]}
                          onChange={(value) => setTokenValue(value, 0)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TokenInput
                          tabIndex={1}
                          value={token[1]}
                          onChange={(value) => setTokenValue(value, 1)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TokenInput
                          tabIndex={2}
                          value={token[2]}
                          onChange={(value) => setTokenValue(value, 2)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.separator}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Remove fontSize="large" />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <TokenInput
                          tabIndex={3}
                          value={token[3]}
                          onChange={(value) => setTokenValue(value, 3)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TokenInput
                          tabIndex={4}
                          value={token[4]}
                          onChange={(value) => setTokenValue(value, 4)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TokenInput
                          tabIndex={5}
                          value={token[5]}
                          onChange={(value) => setTokenValue(value, 5)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Typography className={classes.topSpacing} />
            <Box className={classes.topSpacing}>
              <Grid container spacing={1}>
                <Grid item md={3} />
                <Grid item xs={12} md={6}>
                  <SubmitButton
                    text={t("Acessar")}
                    color="primary"
                    onclick={submit}
                  />
                </Grid>
                <Grid item md={3} />
              </Grid>
            </Box>
            <Typography className={classes.topSpacing} />
            <Box className={classes.boxHelper}>
              <Typography className={classes.helper}>
                {t("Tem alguma dúvida? Entre em contato conosco")}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={1} md={3} />
      </Grid>
    </Box>
  );
}
