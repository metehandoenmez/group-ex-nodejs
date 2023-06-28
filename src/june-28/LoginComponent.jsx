import { useState } from "react";

export default function LoginComponent({ visible, setLoggedIn, setUsername }) {
  const [usernameInput, setUsernameInput] = useState("");

  return (
    <div className={visible ? "" : "hidden"}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={usernameInput}
        onChange={(ev) => {
          setUsernameInput(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          setLoggedIn(true);
          setUsername(usernameInput);
        }}
      >
        Log In
      </button>
      <br />
    </div>
  );
}
