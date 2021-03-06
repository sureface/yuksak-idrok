import React from 'react'
import NewMain from "../../assets/images/graduated-students.jpg"

const NewsMain = () => {
    return (
        <div>
            <h1 className='text-center sm:pb-8 tracking-wider text-2xl font-bold my-10'>YANGILIKLAR</h1>
            <div className='w-full flex lg:flex-row vl:flex-col justify-between bg-white rounded-xl lg:h-96'>
                <div className="lg:w-2/5 w-full">
                    <img className="lg:rounded-l-xl sm:rounded-xl" src={NewMain} alt="oops something wrong"/>
                </div>
                <div className="lg:w-3/5 w-full xl:p-10 lg:p-3 vl:p-3 sm:p-10">
                    <h2 className="text-center sm:text-xl ss:text-lg font-semibold mb-5">BITIRUVCHILARIMIZ 90% TALABA BO’LDI</h2>
                    <p className='xs:text-lg vl:text-base leading-relaxed'>
                        Bu mavsumdagi bitiruvchilarimizning 90 dan ortig’i 1 - 20 chi
                        Avgustga qadar bo’lib o’tgan Davlat Kirish Imtihonlarida
                        muvafaqqiyatli tarzda yuqori ballar bilan talaba bo’lish
                        baxtiga erishdi.

                        Abiturenetlarimizning 27 tasi Toshkent shaxridagi chet-el
                        feliali bo’lmish Turin Politnika, Webster, Inha, Westminister,
                        Gupkina, You Ju va Lomosov kabi nufuzli Universitetlarning
                        Grant asosida talabasi bo’ldilar.

                        10 dan oshiq abiturientlarimiz esa IELTS va TOPIC dan olgan
                        yuqori ballari va matematika fanidan erishgan yutuqlari orqali
                        AQSH, Kanada, Dubay va Xitoyning TOP 100 talik Universitetlarida
                        Grant asosida o’qishni Oktabr oyidan boshlaydilar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsMain
