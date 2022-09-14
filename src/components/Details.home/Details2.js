import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../../data'
import k from './Details.module.css'
import { Card } from 'antd'
import 'antd/dist/antd.css'

const { Meta } = Card
const Details2 = () => {
  return (
    <div className={k.tex}>
            <div className={k.text}>
        <h1>Featured Rooms</h1>
        <div className={k.border}></div>
      </div>
      <div className="container">
        <div className="row">
          {data.slice(0, 3).map((el) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5 ">
                <Card
                  className={k.card}
                  hoverable
                  style={{ width: 435 }}
                  cover={<img src={el.image} alt="" />}
                >
                  <Meta title={el.brand} />
                  <h2>{el.name}</h2>
                  <p className={k.price}>${el.price}</p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <NavLink to={`/${el.id}`}>
                      <button type="button" class="btn btn-primary">
                        FEATURES
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

export default Details2
