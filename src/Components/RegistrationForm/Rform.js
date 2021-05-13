import React, { useState } from "react";

function RegistrationForm(props) {
  const [state , setState] = useState({
    email : "",
    password : "",
    confirmPassword : ""
})
const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}
  return (
    <div class="card text-center mb-3 col-12 col-lg-3 login-card mt-2 hv-center">
      <div className='h1 p-4'>Register</div>
      <form>
        <div className="form-group mx-sm-3 mb-2 text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            *We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mx-sm-3 mb-2 form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="mx-sm-3 mb-2 form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
          />
        </div>
        <button type="submit" className="mb-4 mt-4  btn btn-outline-dark  btn-block">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;