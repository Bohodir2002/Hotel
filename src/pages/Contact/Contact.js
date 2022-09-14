import React from 'react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar2 from '../../components/Navbar2/Navbar2'
import l from '../Contact/Contact.module.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_3lqdod7',
        'template_q9myjfo',
        formRef.current,
        'EVaBhY2D7D3H4gfrX',
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="container contact">
      <Navbar2 />
      <form ref={formRef} onSubmit={sendEmail}>
        <div className={l.body}>
          <div className="row">
            <div className="col-md-8 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">
                  Contact us
                </h1>
                <div className="form-group my-5">
                  <div className="row">
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input className={l.name} type="text" placeholder="Name" name="user_name" />
                    </div>
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                      className={l.subject}
                        type="text"
                        placeholder="Subject"
                        name="user_subject"
                      />
                    </div>
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                      className={l.email}
                        type="text"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input className={l.phone} type="text" placeholder="phone" name="user_phone" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-11">
                    <textarea
                      className="form-control"
                      row="20"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className={l.buttom}>
                  <div className="mt-5 col-md-6 col-12 mx-auto">
                    <NavLink to={"/"}>
                    <button className="btn btn-outline-dark btn-lg btn-block">
                      Send Message
                    </button>
                    <p>{done && 'Thank you...'}</p></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Contact
