import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {
  
    const product = props.product
  
    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        let res = true

        if(color === undefined){
            alert("Пожалуйста, выберите цвет!")
            return
        }
        if (size === undefined) {
            alert('Пожалуйста, выберите размер!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) console.log({color, size, quantity})
    }

    const goToCart = () => {
        if(check()) props.history.push('/cart')
    }

    return (
    <div className="product">
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                    <img src={product.image01} alt="" />
                </div>
                <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                    <img src={product.image02} alt="" />
                </div>
            </div>
            <div className="product__images__main">
                <img src={previewImg} alt="" />
            </div>
            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Информация о товаре
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                    <Button size="sm">
                        {
                            descriptionExpand ? "Свернуть" : "Узнать больше"
                        }
                    </Button>
                </div>
            </div>
        </div>
        
        <div className="product__info">
            <h1 className="product__info__title">{product.title}</h1>
            <div className="product__info__item">
                <span className="product__info__item__price">
                    {numberWithCommas(product.price)}
                </span>
            </div>

            <div className="product__info__item">
                <div className="product__info__item__title">
                    Цвет
                </div>
                <div className="product__info__item__list">
                    {
                        product.colors.map((item, index) => (
                            <div className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="product__info__item">
                <div className="product__info__item__title">
                    Размер
                </div>
                <div className="product__info__item__list">
                    {
                        product.size.map((item, index) => (
                            <div className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                <div className="product__info__item__list__item__size">
                                    {item}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="product__info__item">
                <div className="product__info__item__title">
                    Количество
                </div>
                <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="product__info__item__quantity__input">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>
                        Добавить в корзину
                    </Button>
                    <Button onClick={() => goToCart()}>
                        Купить сейчас
                    </Button>
                </div>
            </div>
            
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Информация о товаре
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                    <Button size="sm">
                        {
                            descriptionExpand ? "Свернуть" : "Узнать больше"
                        }
                    </Button>
                </div>
            </div>

        </div>


    </div>


  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ProductView)
