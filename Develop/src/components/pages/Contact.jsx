import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div>
      <h1>Contact me</h1>
      <form class="container" onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input
            class="form-control"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => {
              if (name == "") {
                document
                  .getElementById("name-warning")
                  .classList.remove("d-none");
              } else {
                document.getElementById("name-warning").classList.add("d-none");
              }
            }}
          />
          <p id="name-warning" class="alert alert-success" role="alert">
            Name cannot be empty!
          </p>
        </div>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            class="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => {
              const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

              const isValid = regex.test(email);

              if (email == "" || !isValid) {
                document
                  .getElementById("email-warning")
                  .classList.remove("d-none");
              } else {
                document
                  .getElementById("email-warning")
                  .classList.add("d-none");
              }
            }}
          />
          <p id="email-warning" class="alert alert-success" role="alert">
            Email is invalid!
          </p>
        </div>
        <div class="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            class="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={(e) => {
              if (message == "") {
                document
                  .getElementById("message-warning")
                  .classList.remove("d-none");
              } else {
                document
                  .getElementById("message-warning")
                  .classList.add("d-none");
              }
            }}
          />
          <p id="message-warning" class="alert alert-success" role="alert">
            Message cannot be empty!
          </p>
        </div>
        <button class="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
