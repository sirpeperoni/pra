import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlide'

import cartItemsSlice from './shopping-cart/cartItemsSlide'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsSlice
    },
})