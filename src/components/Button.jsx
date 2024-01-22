import React from 'react'
import PropTypes from 'prop-types'

import { SnackbarProvider, enqueueSnackbar } from 'notistack';


const Button = props => {

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'

    const size = props.size ? 'btn-' + props.size : ''

    const animate = props.animate ? 'btn-animate' : ''


    return (
        <div className='product__info__item__button'>
            <SnackbarProvider/>
            <button
                className={`btn ${bg} ${size} ${animate}`}
                onClick={props.onClick ? () => props.onClick() : null}
            >
                <span className='btn__txt'>{props.children}</span>
                {
                    props.icon ? (
                        <span className='btn__icon'>
                            <i className={`${props.icon} bx-tada`}></i>
                        </span>
                    ) : null
                }
            </button>
        </div>
  )
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default Button
