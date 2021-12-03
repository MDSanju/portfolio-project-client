import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_id",
        "gmail_template",
        form.current,
        "user_MEvTZqLHfa5kkhyZOup8N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message inserted successfully!");
    reset();
  };

  const cancel = () => {
    reset();
  };

  return (
    <div id="contact" className="form-background">
      <div className="form-container">
        <h2 className="contact-me-title">
          CONTACT <span style={{ color: "crimson" }}>ME</span>
        </h2>
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div className="app-contact">CONTACT NO: +880 1786649178</div>
            </div>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="NAME"
                      {...register("name")}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="email"
                      placeholder="EMAIL"
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="SUBJECT"
                      {...register("subject")}
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      type="text"
                      placeholder="MESSAGE"
                      {...register("message")}
                      required
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button onClick={cancel} className="app-form-button">
                      CANCEL
                    </button>
                    <input
                      type="submit"
                      className="app-form-button"
                      value="SEND"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
