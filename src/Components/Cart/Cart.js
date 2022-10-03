import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
    let total = 0
    for (let i = 0; i < props.cart.length; i++) {
        const player = props.cart[i];
        total = total + player.price
    }
    let budget = 50000000 - total;
    return (
        <div className="card">
            <h3>Your Players: {props.cart.length}</h3>
            <h4 className='my-3'>Budget Left: {budget}$</h4>
            <h4 className='my-3'>TOTAL: {total}$</h4>

            <ul>
                {props.cart.map((player) =>
                    <li className='list' key={player.id}>
                        <div className='d-flex bg-light text-success rounded align-items-center'>
                            <img className='img-fluid rounded small-img ' src={player.image} alt={player.name} />
                            <div className='justify-content-center '>
                                <span >{player.name}</span><br />
                                <span>{player.price}$</span>
                                <div className='ml-auto'>
                                    <button className='btn btn-sm btn-danger' onClick={() => props.handleRemove(player)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Cart
