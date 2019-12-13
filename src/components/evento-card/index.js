import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './evento-card.css'

function EventoCard({key, titulo, detalhes, visualizacoes}){
	return(
		<div className='col-md-3 col-sm-12'>
			<img src='https://via.placeholder.com/500' 
				className='card-img-top img-cartao'
				alt='imagem do evento'/>
			
			<div className='card-body'>
				<h5>{titulo}</h5>
				<p className='card-text text-justify'>{detalhes}</p>

				<div className='row rodape-card d-flex align-items-center'>
					<div className='col-6'>
						<Link to='/' className='btn btn-sm btn-detalhes'>+ detalhes</Link>
					</div>

					<div className='col-6 text-right'>
						<i className='fas fa-eye'><span>{visualizacoes}</span></i>
					</div>
				</div>
			</div>

		</div>
			
	)
}

export default EventoCard