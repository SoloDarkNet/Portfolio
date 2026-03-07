import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98p1lwo",
        "template_vm8yfpm",
        form.current,
        "to06NPhyXKVER6KqU",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
