import React from "react";
import { Button, Grid, Box } from "@mui/material";
import "./serviceDetailsStyles.css";

export default function Services({ serviceDetails, onClose }: any) {
  return (
    <div>
      <h2>{serviceDetails.ServiceName}</h2>
      <Grid container>
        <Grid item>
          <div className="card_details">
            <div className="card_title" onClick={() => onClose()}>
              <i className="fa fa-window-close" />
            </div>
            <p>{serviceDetails.Description}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
