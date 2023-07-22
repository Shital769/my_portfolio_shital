import React from "react";

const form = () => {
  return (
    <Layout>
      <div className="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mdorkwkd" method="POST">
              <div className="form-control">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className="input-field"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit-btn"
                className="submit-btn "
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default form;
