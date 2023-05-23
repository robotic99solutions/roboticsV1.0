import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./AllInOneACStyles.css";

export interface BrokerDialogBox {
  open: boolean;
  onClose: () => void;
}

export default function AllInOneAC() {
  const [isDailogOpen, setIsDailogOpen] = useState(false);

  // Dialog Box for broker link
  const MyDailogBox = (props: BrokerDialogBox) => {
    const { onClose, open } = props;
    useEffect(() => {
      console.log("This will run after 10 second!");
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      return () => clearTimeout(timer);
    }, [open]);

    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Select Among The Best</DialogTitle>
        <DialogContent>
          <div className="dialog_row">
            <div className="dialog_clm">
              <a
                href="https://choiceindia.com/open-free-demat-account?refercode=WEZG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choice India
              </a>
            </div>
            <div className="dialog_clm">
              <a
                href="https://kyc.swastika.co.in/customer/login/EB923A1993Mahesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swastika
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const MyDailogOpenClose = () => {
    console.log("Selected:");
    setIsDailogOpen(!isDailogOpen);
  };

  return (
    <div id="allInOne_box">
      <h2>All in 1 account</h2>
      <div className="card_shadow">
        <Grid container columnSpacing={{ xs: 2, sm: 1 }}>
          {/* 1 */}
          <Grid item xs={6} md={6}>
            <div className="box_container">
              <p className="line1">
                Open a Demat Account
                <p className="line2">No Annual Charges* </p>
              </p>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="box_container">
              <div className="small_box" onClick={() => MyDailogOpenClose()}>
                <i
                  style={{ color: "#5ba9ff", fontSize: 20 }}
                  className="fa fa-universal-access"
                />
                <span className="text">One Account for</span>
                <span className="text">Everthing</span>
              </div>
              <div className="small_box" onClick={() => MyDailogOpenClose()}>
                <i
                  style={{ color: "#d9b934", fontSize: 20 }}
                  className="fa fa-inr"
                />
                <span className="text">Low Brokerage</span>
                <span className="text">Charges</span>
              </div>
              <div className="small_box" onClick={() => MyDailogOpenClose()}>
                <i
                  style={{ color: "#5ba9ff", fontSize: 20 }}
                  className="fa fa-line-chart"
                />
                <span className="text">Robotic Research</span>
                <span className="text">Advisory</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {isDailogOpen && (
        <MyDailogBox open={isDailogOpen} onClose={MyDailogOpenClose} />
      )}
    </div>
  );
}
