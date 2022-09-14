import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../../data'

import o from './Productinfo.module.css'
const Booking = () => {
  const params = useParams()
  const log = products.find((el) => {
    return el.id === params.id
  })
  return (
    <div className="container">
      <div className={o.body}>
        <div className="card">
          <h1 className={o.h1}>Booking</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <img className={o.img} src={log.image} alt="" />
              </div>
              <div className="col-lg-6 col-md-12">
                <h1 className={o.h2}>Rooms Details</h1>
                <div className={o.tr}>
                  <tr>
                    <th>Room Type</th>
                    <td>{log.name}</td>
                  </tr>
                  <tr>
                    <th>Capacity</th>
                    <td>{log.capacity} </td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td> {log.size}sqft.</td>
                  </tr>
                  <tr>
                    <th>Breakfast</th>
                    <td>
                      {log.breakfast === true ? `Included` : `Not Included`}
                    </td>
                  </tr>
                  <tr>
                    <th>Pets</th>
                    <td>{log.pets === true ? `Allowed` : `Not Allowed`}</td>
                  </tr>
                </div>
              </div>
            </div>
            <div className={o.date}>
              <div className="row">
                <div className="col-lg-6">
                  <h5>From date</h5>
                  <input className={o.input} type="date" />
                </div>
                <div className="col-lg-6">
                  <h5>To Date</h5>
                  <input className={o.input} type="date" />
                </div>
              </div>
            </div>
            <div className={o.buttom}>
              <Link to={"/Contact"} className="btn btn-outline-primary">
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
