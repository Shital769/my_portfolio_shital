import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mdorkwkd" method="POST">
              <div className="mb-3">
                <label for="FormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="Enter Your Name"
                  name="sender-name"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="FormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="Enter Your Email"
                  name="sender-email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="FormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="FormControlTextarea1"
                  name="message"
                  placeholder="Enter Your Message"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
