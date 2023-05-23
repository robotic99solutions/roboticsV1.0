import { Button, Grid, Box } from "@mui/material";
import "./priceListStyles.css";

export default function PriceList() {
  return (
    <div id="allInOne_box">
      <h2>Service Charges</h2>
      <div className="card_shadow">
        <Grid container columnSpacing={{ xs: 2, sm: 1 }}>
          {/* 1 */}
          <Grid item xs={6} md={6}>
            <ul className="ul_class">
              <li>Call Will Be Given Only On SMS & Chat Room.</li>
              <li>India: All GSM & CDMA Network Covered.</li>
              <li>India: WhatsApp Message Will be Available.</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="box_container">
              <div className="small_box">
                <span className="text_period">
                  Monthly <strong>30Days</strong>
                </span>
                <span className="text">
                  {" "}
                  <i
                    style={{ color: "#5ba9ff", fontSize: 13 }}
                    className="fa fa-inr"
                  />{" "}
                  12,000 + 18% GST
                </span>
              </div>
              <div className="small_box">
                <span className="text_period">
                  Quarterly <strong>90Days</strong>
                </span>
                <span className="text">
                  {" "}
                  <i
                    style={{ color: "#5ba9ff", fontSize: 13 }}
                    className="fa fa-inr"
                  />{" "}
                  36,000 + 18% GST
                </span>
              </div>
              <div className="small_box">
                <span className="text_period">
                  Half Yearly <strong>180Days</strong>
                </span>
                <span className="text">
                  {" "}
                  <i
                    style={{ color: "#5ba9ff", fontSize: 13 }}
                    className="fa fa-inr"
                  />{" "}
                  60,000 + 18% GST
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
