import React from 'react'

const Card = (props) => {
    console.log(props.photo)
    return (
        <div className='mr-8 m-10 item-center bg-white text-black text-2xl inline-block p-6 text-center rounded' >
            <img className="ml-10 h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.name} </h1>
            <h4 className='text-blue-400'>{props.profession}</h4>
            <h1>{props.city},{props.age}</h1>
            <button className='mt-5 bg-emerald-700 text-white px-4 py-2 font-medium rounded-full tetx-xl'>add friend</button>

        </div>
    )
}

export default Card
