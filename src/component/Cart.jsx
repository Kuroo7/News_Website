import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card'
import ShiverUi from './ShiverUi'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div>
            <h1 className=' m-5 text-center font-bold text-3xl'>Cart</h1>
            <button className='bg-red-600' onClick={handleClearCart} >Clear Cart</button>
            {!cartItems.length ? (<ShiverUi />) :
                (
                    <div className="flex justify-center flex-wrap">
                        {
                            cartItems.map((item, index) => {
                                return <Card {...item} key={index} />
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cart