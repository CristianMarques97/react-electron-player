import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function NotFoundView() {
  const { t } = useTranslation(["text"]);
  return <Box>{t("Página Não Encontrada")}</Box>;
}
