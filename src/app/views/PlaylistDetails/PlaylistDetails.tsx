import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";

interface ParamsProps {
  id: string;
}

export default function PlaylistDetailsView() {
  const { id } = useParams<ParamsProps>();

  return <Box>id: {id}</Box>;
}
