import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Player from '../Player/Player'
import './Body.css'

function Body() {
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    const handleClick = (player) => {
        // console.log('Player Added', player)
        //if player already exists in cart, then don't add it again
        if (cart.includes(player)) {
            alert('Player already exists in your Team')
        } else {
            const newCart = [...cart, player]
            setCart(newCart)
        }
    }
    const handleRemove = (player) => {
        const newCart = cart.filter(p => p.id !== player.id)
        setCart(newCart)
    }

    return (
        <div className='py-5'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row">
                                {players.map((player) => <Player
                                    player={player}
                                    handleClick={handleClick}
                                    key={player.id}
                                ></Player>)}
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 cart">
                        <Cart
                            cart={cart}
                            handleRemove={handleRemove}
                        >
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body

