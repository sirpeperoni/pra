import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'
import Button from '../Button'

import Chart1 from './Chart';
import Chart from 'chart.js/auto';

import { remove } from '../../redux/product-modal/productModalSlide'

import productData from '../../assets/fake-data/products'

const ProductViewModal = () => {

    const productSlug = useSelector((state) => state.productModal.value)

    const dispatch = useDispatch()

    const [product, setproduct] = useState(undefined)

    useEffect(() => {
        setproduct(productData.getProductBySlug(productSlug))
    }, [productSlug])

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                        onClick={() => dispatch(remove())}
                    >
                        Закрыть
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
