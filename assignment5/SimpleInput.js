import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameBlur, setNameBlur] = useState(false);

  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);

  const nameValid = name.trim() !== "";
  const nameInvalid = !nameValid && nameBlur;

  const emailValid = email.includes("@");
  const emailInvalid = !emailValid && emailBlur;

  let formIsValid = false;

  if (nameValid && emailValid) {
    formIsValid = true;
  }

  const nameBlurHandler = (e) => {
    setNameBlur(true);
  };

  const emailBlurHandler = (e) => {
    setEmailBlur(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setNameBlur(true);

    if (!nameValid) {
      return;
    }

    setName("");
    setNameBlur(false);

    setEmail("");
    setEmailBlur(false);
  };

  const nameClass = nameInvalid ? "form-control invalid" : "form-control";

  const emailClass = emailInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClass}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInvalid && <p className="error-text">INVALID NAME</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInvalid && <p className="error-text">INVALID EMAIL</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>SUBMIT</button>
      </div>
    </form>
  );
};

export default SimpleInput;
