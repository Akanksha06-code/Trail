import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form2.css'
import Swal from 'sweetalert2';


  


const ContactForm2 = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key",process.env.REACT_APP_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success",
       confirmButtonColor: '#90EE90',
      customClass: {
      popup: 'no-scrollbars'
    }
    });
    };
  
  }

  return (
    <div
      className={`contact-form2-contact5 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-row contact-form2-max-width">
        <div className="thq-flex-column contact-form2-content">
          <div className="contact-form2-section-title">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form2-text19">
                    Fill out the form below and we'll get back to you as
                    soon as possible.
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form2-text23">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form2-text17">
                    Have a question or need support?
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="contact-form2-contact-info thq-flex-column">
            <div className="contact-form2-row1 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form2-text18">Email</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form2-row2 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form2-text21">Phone</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form2-row3 thq-flex-row">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="thq-body-small">
                {props.adress ?? (
                  <Fragment>
                    <span className="contact-form2-text22">
                      Muzaffarpur, Bihar
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form2-form" onSubmit={handleSubmit}>
          <div className="contact-form2-input1">
            <label htmlFor="contact-form-2-name" className="thq-body-small">
              Name
            </label>
            <input
              type="text"
              id="contact-form-2-name"
              placeholder="Name"
              name="Name"
              className="contact-form2-text-input1 thq-input"
            />
          </div>
          <div className="contact-form2-input2">
            <label htmlFor="contact-form-2-email" className="thq-body-small">
              Email
            </label>
            <input
              type="email"
              id="contact-form-2-email"
              required="true"
              name="Email"
              placeholder="Email"
              className="contact-form2-text-input2 thq-input"
            />
          </div>
          <div className="contact-form2-input3">
            <label htmlFor="contact-form-2-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-2-message"
              rows="3"
              placeholder="Enter your message"
              name='Message'
              className="contact-form2-textarea thq-input"
            ></textarea>
          </div>
          <div className="contact-form2-checkbox1">
            <input
              type="checkbox"
              id="contact-form-2-check"
              checked="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-2-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button  type="submit" className="thq-button-filled">
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form2-text20">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm2.defaultProps = {
  content1: undefined,
  email: undefined,
  content2: undefined,
  action: undefined,
  phone: undefined,
  adress: undefined,
  heading1: undefined,
  rootClassName: '',
}

ContactForm2.propTypes = {
  content1: PropTypes.element,
  email: PropTypes.element,
  content2: PropTypes.element,
  action: PropTypes.element,
  phone: PropTypes.element,
  adress: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default ContactForm2;
