import React from 'react';

const Contact = () => {
  return (
    <section data-aos="zoom-in" className="section_contact" id="Contact">
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{textAlign : "center"}}>Contact</h1>
        <form method="post">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
