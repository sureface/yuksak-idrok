import React from 'react'
import { Link } from 'react-router-dom'
import {GrLinkNext } from "react-icons/gr"

const EachItem = ({ItemTitle, image, title , text, link}) => {
    return (
        <div className="shadow-2xl flex flex-col justify-between w-full bg-white rounded-2xl">
            <div>
            <h1 className='text-center text-xl m-4'>{ItemTitle}</h1>
            <img className='w-full h-72' src={image} alt="rasm" />
            </div>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-xl">{title}</h2>
                <p className="text-lg">
                    {text}
                </p>

            </div>
            <div className="flex p-4 justify-end">
                    <Link className='border-black border-2 p-3 border-solid rounded-full' to={link}><GrLinkNext/> </Link>
            </div>
        </div>
    )
}



export default EachItem
