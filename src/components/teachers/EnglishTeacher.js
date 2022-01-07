import React from 'react'
import teacher from "../../assets/images/englishTeacher.png"

const EnglishTeacher = () => {
    return (
        <div className='py-12 flex'>
            <img className='w-11/12' src={teacher} alt="" />
            <p className='text-lg px-6 tracking-wide leading-relaxed'> <span className='font-semibold'>Mis. MALIKA - Malika Zunnunova </span>   It is a 
                long established fact that a reader will be distracted by
                the r eadable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and
                the like).
                <br /> <br />
                 The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various
                versions have evolved over the years  for
                'lorem ipsum' will uncover many web sites
                still in their infancy here, content here ...
            </p>
        </div>
    )
}

export default EnglishTeacher
