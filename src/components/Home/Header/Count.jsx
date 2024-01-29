import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useState } from 'react'

const Count = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [totalProducts, setTotalProducts] = useState(0)
    useEffect(() => {
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <div>
            {totalProducts > 99 ? "99+" : totalProducts}
        </div>
    )
}

export default Count;
