import React from 'react'

const CarCard = ({car}) =>{
    return(
        <div className='group rounded-xl
        overflow-hidden shadow-lg hover-translate-y-1 transition-all duration-500 group-hover:scale-105'>
            {car.isAvaliable && <p className=' absolute top-4 left-4 bg-primary/90
            text-white text-xs px-2.5 py-1 rounded-full'> Avaliable Now </p>}
            <div className=' absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'> 
            <span className='font-semibold'> ${car.pricePerDay}</span>
            <span className='text-sm text-white/80'>/ Day</span>
            </div>
        </div>
    )
}
export default CarCard