import React, { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import ServiceDetails from "../ServiceDetails/serviceDetails";

import "./servicesStyles.css";

export default function Services() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const serviceList = [
    {
      ServiceName: "Intraday",
      Description:
        "Successful intraday trading requires a combination of skill, discipline, and a solid trading plan. Traders must have a thorough understanding of the market they are trading in, as well as effective risk management strategies to limit potential losses. Intraday trading can be fast-paced and demanding, requiring constant attention to market conditions and the ability to make quick decisions",
      Icon: "fa fa-line-chart",
      ButtonName: "Read More"
    },
    {
      ServiceName: "Short Term",
      Description:
        "Short-term trading refers to a trading strategy in which traders aim to profit from the short-term price fluctuations in financial markets. It involves buying and selling assets, such as stocks, currencies, or commodities, within a relatively short time frame, often ranging from minutes to a few days.",
      Icon: "fa fa-area-chart",
      ButtonName: "Read More"
    },
    {
      ServiceName: "Medium Term",
      Description:
        "Medium-term traders analyze price charts, technical indicators, and fundamental factors to identify assets with favorable risk-to-reward ratios. They aim to take advantage of market trends that unfold over a slightly longer time frame compared to intraday trading. Medium-term traders often use a combination of technical and fundamental analysis to make informed trading decisions.",
      Icon: "fa fa-bar-chart",
      ButtonName: "Read More"
    },
    {
      ServiceName: "Long Term",
      Description:
        "Long-term trading, also known as buy-and-hold investing or position trading, is a strategy in which investors hold positions in assets for an extended period, typically spanning months to years. Unlike short-term and medium-term trading, long-term trading focuses on long-range investment goals and is less concerned with short-term price fluctuations.",
      Icon: "fa fa-area-chart",
      ButtonName: "Read More"
    }
  ];

  const openCloseDetails = () => {
    setShowDetails(!showDetails);
  };

  const showDetailsFun = (item: any) => {
    setSelectedService(item);
    openCloseDetails();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {showDetails ? (
          <div>
            <ServiceDetails
              serviceDetails={selectedService}
              onClose={() => openCloseDetails()}
            />
          </div>
        ) : (
          <div>
            <h2>Explore</h2>
            <Grid container columnSpacing={{ xs: 10, sm: 2 }}>
              {serviceList.map((item, index) => {
                return (
                  <Grid key={index} item xs={6} md={6}>
                    <div className="card">
                      <i className={item.Icon} />
                      <h4>{item.ServiceName}</h4>
                      <Button
                        onClick={() => showDetailsFun(item)}
                        color="primary"
                        type="submit"
                        variant="outlined"
                        size="large"
                      >
                        {item.ButtonName}
                      </Button>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </Box>
    </>
  );
}
