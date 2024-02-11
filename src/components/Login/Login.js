import React, { useState } from 'react'
import styles from './logindesign.module.css'
import { Await, Link } from "react-router-dom";
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState(
    {

      email: "",
      pass: "",
    }
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [SubmitButtonDisable, setSubmitButtonDisable] = useState(false);
  const handlesubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please enter all fields ")
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      setSubmitButtonDisable(false);
      navigate("/Home");
      // console.log(user);
    })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);

      }
      );
  };


  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" placeholder="Enter your email address" onChange={event =>
          setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <br />
        <InputControl label="Password" placeholder="Enter your Password" onChange={event =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))} />
        <div className={styles.footer}>
          <br />
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={SubmitButtonDisable} onClick={handlesubmit}>Login</button>
          <p>
            Don't have an account?
            <span>
              <Link to="/Signup">singup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
