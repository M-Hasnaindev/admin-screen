import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Analytics = () => {
  return (
    <div>
      <h1>Buttons</h1>
      <br />
      <br />
      <br />
      <br />
      <Stack spacing={5} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default Analytics;
