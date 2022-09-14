import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import data from '../../data'
import k from './Details.module.css'
import { Card } from 'antd'
import 'antd/dist/antd.css'

const { Meta } = Card
const Details = () => {
  return (
    <div className={k.tex}>
      <div className="container">
        <div className="row">
          {data.map((el) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5 ">
                <Card
                  className={k.card}
                  hoverable
                  style={{ width: 435 }}
                  cover={<img src={el.image} alt="" />}
                >
                  <p className={k.price}>${el.price}</p>
                  <Meta title={el.brand} />
                  <h2>{el.name}</h2>

                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <NavLink to={`/${el.id}`}>
                      <button type="button" class="btn btn-warning">
                      BOOKING
                      </button>
                    </NavLink>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Details
