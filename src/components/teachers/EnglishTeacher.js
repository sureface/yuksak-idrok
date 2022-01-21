import React from 'react'
import teacher from "../../assets/images/englishTeacher.png"

const EnglishTeacher = () => {
    return (
        <div className='py-12 flex md:flex-row sm:flex-col'>
            <img className=' lg:w-1/2 md:w-2/5 sm:w-full md:rounded-l-2xl sm:rounded-t-2xl ' src={teacher} alt="" />
            <p className='lg:text-lg md:text-base sm:text-lg  md:rounded-r-2xl sm:rounded-b-2xl lg:px-6 md:px-3 sm:px-6 sm:py-4 lg:tracking-wide lg:leading-relaxed bg-white flex align-middle flex-col justify-center'> <span className='font-semibold'>Mis. MALIKA - Malika Zunnunova </span>   
              
It is a long established fact that a reader will be distracted by the r eadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

 
            </p>
        </div>
    )
}

export default EnglishTeacher
