import React from 'react'

import {Link} from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
  {
    display: "О нас",
    path: "/about"
  },
  {
    display: "Контакт",
    path: "/about"
  },
  {
    display: "Вакансии",
    path: "/about"
  },
  {
    display: "Новости",
    path: "/about"
  },
  {
    display: "Сеть магазинов",
    path: "/about"
  }
]
const footerCustomerLinks = [
  {
      display: "Политика возврата",
      path: "/about"
  },
  {
      display: "Гарантийная политика",
      path: "/about"
  },
  {
      display: "Политика возврата",
      path: "/about"
  }
]
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
        <div>
            <div className="footer__title">
              Служба поддержки
            </div>
            <div className="footer__content">
                <p>
                  Свяжитесь для заказа <strong>0123456789</strong>
                </p>
                <p>
                  Вопросы по заказам <strong>0123456789</strong>
                </p>
                <p>
                  Предложения и жалобы <strong>0123456789</strong>
                </p>
            </div>
        </div>

        <div>
            <div className="footer__title">
              О YOLO
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
        </div>

        <div>
            <div className="footer__title">
              Обслуживание клиентов
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
        </div>
          
        <div className='footer__about'>
          <p>
            <Link to="/">
              <img src={logo} className='footer__logo' alt="" />
            </Link>
          </p>
          <p>
            Мы стремимся каждый день доставлять радость от новой одежды миллионам потребителей. Давайте присоединимся к Yolo к активной и активной жизни.
          </p>
        </div>
          
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
