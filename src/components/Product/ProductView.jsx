import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import { useDispatch } from 'react-redux'

import { enqueueSnackbar } from 'notistack';



import { addItem } from '../../redux/shopping-cart/cartItemsSlide'
import { remove } from '../../redux/product-modal/productModalSlide'

import Button from '../Button'
import numberWithCommas from '../../utils/numberWithCommas'

const ProductView = props => {

    const dispatch = useDispatch()
  
    let product = props.product

    if(product === undefined) product = {
        price: 0,
        title: "",
        colors: [],
        size: []
    }
  
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
            enqueueSnackbar('Пожалуйста, выберите цвет!', { variant: 'error' });
            return
        }
        if (size === undefined) {
            enqueueSnackbar('Пожалуйста, выберите размер!', { variant: 'error' });
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                enqueueSnackbar('Товар добавлен в корзину!', { variant: 'success' });
            } else {
                enqueueSnackbar('Ошибка!', { variant: 'error' });
            }
        }
    }

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                enqueueSnackbar('Товар добавлен в корзину!', { variant: 'success' });
                props.history.push('/cart')
            } else {
                enqueueSnackbar('Ошибка!', { variant: 'error' });
            }
        }
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
    product: PropTypes.object
}

export default withRouter(ProductView)
