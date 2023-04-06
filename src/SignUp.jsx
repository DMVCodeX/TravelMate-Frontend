import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="card">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="" onSubmit={handleSubmit}>
        <div>
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <p></p>
        <div>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <p></p>
        <div>
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <p></p>
        <div>
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <p></p>
        <button type="submit" className="btn btn-light">
          Sign Up
        </button>
        <p></p>
      </form>
    </div>
  );
}
