import { Box, Card, Grid, Typography } from '@material-ui/core'
import { Remove } from '@material-ui/icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import SubmitButton from './components/SubmitButton'
import TokenInput from './components/TokenInput'
import useStyles from './Styles'
import logo from '../../../assets/2idLogo.png'
import StoreService from '../../services/api/stores/StoreService'
import { setStore } from '../../store/store-modules/stores/StoresAction'

export default function LoginView({ history }: any) {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const [token, setToken] = React.useState<string[]>(Array(8).fill(''))

  const submit = async () => {
    try {
      const formatedToken = `${token.slice(0, 4)}-${token.slice(
        4,
        8
      )}`.replaceAll(',', '')

      const { data: store } = await StoreService.getStoreByToken(formatedToken)
      if (store?.id) {
        dispatch(setStore(store))
        history.push('/scheduling')
      } else {
        toast.error(t('Loja não encontrada'))
      }
    } catch (e) {
      toast.error(t('Erro ao buscar a loja'))
    }
  }

  const changeInputFocus = (value: string, current: number) => {
    if (current < 8)
      document
        .getElementById(`ref-${value?.length ? current + 1 : current - 1}`)
        ?.focus()
  }

  const setTokenValue = (value: string, index: number) => {
    const tokenArray = token
    tokenArray[index] = value
    setToken(Array.from(tokenArray))
    changeInputFocus(value, index)
  }

  const onPaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData?.getData('text')
    if (text?.length > 7) {
      setToken(Array.from(text.replaceAll('-', '')))
    }
  }

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={1} md={3} />
        <Grid item xs={10} md={6} className={classes.center}>
          <Card className={classes.card}>
            <Box className={classes.logoBox}>
              <img className={classes.logo} alt="logo" src={logo} />
            </Box>
            <Typography className={classes.topSpacing} />
            <Box className={classes.boxTitle}>
              <Typography className={classes.title}>
                {t(
                  'Digite abaixo o código de sua loja recebido por e-mail ao efetuar o cadastro'
                )}
              </Typography>
            </Box>
            <Box className={classes.topSpacing}>
              <Grid container>
                <Grid item xs={5}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid item xs={3}>
                        <TokenInput
                          autoFocus
                          id="ref-0"
                          value={token[0]}
                          onChange={(value) => setTokenValue(value, 0)}
                          onPaste={onPaste}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-1"
                          value={token[1]}
                          onChange={(value) => setTokenValue(value, 1)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-2"
                          value={token[2]}
                          onChange={(value) => setTokenValue(value, 2)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-3"
                          value={token[3]}
                          onChange={(value) => setTokenValue(value, 3)}
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
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-4"
                          value={token[4]}
                          onChange={(value) => setTokenValue(value, 4)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-5"
                          value={token[5]}
                          onChange={(value) => setTokenValue(value, 5)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-6"
                          value={token[6]}
                          onChange={(value) => setTokenValue(value, 6)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TokenInput
                          id="ref-7"
                          value={token[7]}
                          onChange={(value) => setTokenValue(value, 7)}
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
                <Grid item xs={4} md={3} />
                <Grid item xs={4} md={6}>
                  <SubmitButton
                    text={t('Acessar')}
                    color="primary"
                    onclick={submit}
                  />
                </Grid>
                <Grid item xs={4} md={3} />
              </Grid>
            </Box>
            <Typography className={classes.topSpacing} />
            <Box className={classes.boxHelper}>
              <Typography className={classes.helper}>
                {t('Tem alguma dúvida? Entre em contato conosco')}
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={1} md={3} />
      </Grid>
    </Box>
  )
}
