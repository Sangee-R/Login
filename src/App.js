import React from "react";
import StepForm from "./component/stepForm";
import auth from "./auth";
import PhoneInput from "./component/phoneInput";

function App() {
  if (auth.isAuthenticated()) return <PhoneInput />;
  else return <StepForm />;
}

export default App;
