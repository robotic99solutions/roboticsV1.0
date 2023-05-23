import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Input,
  Slide,
  Snackbar
} from "@mui/material";
import emailjs from "@emailjs/browser";
import "./ContactFormStyles.css";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("I am willing to know more...");
  const [mobileNumber, setMobileNumber] = useState(" ");
  const [showAlert, setShowAlert] = useState(false);

  // useEffect(() => {
  //   console.log("Contact Form Mounted:");
  //   return () => {
  //     console.log("Contact Form Un-Mounted:");
  //   };
  // }, []);

  function TransitionLeft(props: any) {
    return <Slide {...props} direction="up" />;
  }

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <Box sx={{ padding: 0 }}>
      <h2>Contact Us</h2>
      {/* sx={{ maxWidth: 500 }} */}
      <Card className="cardContact" variant="outlined">
        <CardContent>
          <form
            onSubmit={(event: any) => {
              event.preventDefault();
              emailjs
                .sendForm(
                  "service_eq2332e",
                  "template_go1r3cc",
                  event.target,
                  "gsfTtaxkuuh1G3lRw"
                )
                .then(
                  (result) => {
                    setShowAlert(true);
                    setUserName("");
                    setMobileNumber("");
                    console.log("YES:", result.text);
                  },
                  (error) => {
                    console.log("NO:", error.text);
                  }
                );
            }}
          >
            <Input
              type="text"
              color="primary"
              disableUnderline={true}
              fullWidth={true}
              placeholder="Type your name"
              onChange={(event) => {
                setUserName(event.target.value.replace(/[^A-Za-z]/g, " "));
              }}
              name="name"
              value={userName}
              sx={{ mb: 2, fontSize: 15 }}
              inputProps={{ maxLength: 16 }}
              required
            />

            <Input
              type="number"
              color="primary"
              disableUnderline={true}
              fullWidth={true}
              placeholder="Type your mobile number"
              onChange={(event) => {
                if (event.target.value.length <= 10) {
                  setMobileNumber(event.target.value);
                }
              }}
              name="mobile"
              value={mobileNumber}
              sx={{ mb: 2, fontSize: 15 }}
              inputProps={{ maxLength: 10 }}
              required
            />

            <Input
              type="text"
              color="primary"
              disableUnderline={true}
              fullWidth={true}
              placeholder="Message"
              onChange={(event) => {
                setMessage(event.target.value.replace(/[^A-Za-z]/g, " "));
              }}
              name="message"
              value={message}
              sx={{ mb: 2, fontSize: 15 }}
              inputProps={{ maxLength: 16 }}
              required
            />

            <Button
              color="primary"
              type="submit"
              variant="outlined"
              size="large"
            >
              Submit
            </Button>
          </form>
        </CardContent>
        {showAlert && (
          <Snackbar
            open={showAlert}
            TransitionComponent={TransitionLeft}
            onClose={handleClose}
            autoHideDuration={1000}
            message="Will Connect with you soon...  ☑️"
          />
        )}

        {/* <Alert severity="success">
            Thank you, We will contact you soon..
          </Alert>
        </Snackbar> */}
      </Card>
    </Box>
  );
}

export default ContactForm;
