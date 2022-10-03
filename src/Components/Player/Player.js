import React from 'react'
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Player(props) {
    const { name, image, position, age, country, club, price } = props.player
    return (
        <div className="col-md-4 py-4">
            <div className="card player-card">
                <img className='img-fluid rounded' src={image} alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-success text-center">{name}</h5>
                    <p className='text-dark text-center'>Position: <span>{position}</span></p>
                    <p className='text-dark text-center'>Age: <span>{age}</span></p>
                    <p className='text-dark text-center'>Country: <span>{country}</span></p>
                    <p className='text-dark text-center'>Club: <span>{club}</span></p>
                    <p className='text-dark text-center'>Price: <span>${price}</span></p>
                    <div className='text-center mt-3'>
                        <button className='btn btn-success' onClick={() => { props.handleClick(props.player) }}><FontAwesomeIcon icon={faPlus} /> Add Player</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Player
