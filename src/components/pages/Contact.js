import { useState } from "react";
import HeroBanner from "../layout/HeroBanner";

function Contact() {
  return (
    <>
      <HeroBanner
        type="contact"
        title="Contact"
        lead="Questions? There is definitely a few people on our staff who know more than  do. I'm just the web designer."
      />

      {/* Contact Form Section */}
      <section className="rent-form-section py-4">
        <div className="container">
          <div className="rent-content">
            <i className="fas fa-phone fa-5x"></i>
            <h2 className="lg">We're here to help</h2>
            <p className="lead">
              Get in touch with us and we'll get back to you as soon as
              possible.
            </p>
          </div>
          {/* form */}
          <div className="rent-form contact-form">
            <form method="POST" action="contactForm.php">
              <div className="form-control">
                <label for="name">Name/Organization</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-control">
                <label for="phone">Phone</label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-control">
                <label for="comments">Questions/Comments</label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input
                className="btn btn-outline"
                name="submit"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
