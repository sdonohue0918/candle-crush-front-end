import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default function Checkout({currentUser, cart, checkoutHandler}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [shippingAddress, setShippingAddress] = React.useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  })
  const [paymentInfo, setPaymentInfo] = React.useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  })

  const addressHandler = e => {
    setShippingAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const paymentHandler = e => {
    setPaymentInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ['Shipping Address', 'Payment Details', 'Review Your Order'];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm addressHandler={addressHandler} shippingAddress={shippingAddress}/>;
      case 1:
        return <PaymentForm paymentHandler={paymentHandler} paymentInfo={paymentInfo}/>;
      case 2:
        return <Review currentUser={currentUser} cart={cart} checkoutHandler={checkoutHandler} paymentInfo={paymentInfo} shippingAddress={shippingAddress}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 
                    ?
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={checkoutHandler}
                      className={classes.button}
                    >
                      Place Order
                    </Button>
                      : 
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  }
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </>
  );
}

  


