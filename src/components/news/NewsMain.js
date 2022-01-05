import React from 'react'
import NewMain from "../../assets/images/graduated-students.jpg"

const NewsMain = () => {
    return (
        <div>
            <h1 className='text-center pb-8 tracking-wider text-2xl font-bold my-10'>YANGILIKLAR</h1>
            <div className='w-full flex justify-between bg-white rounded-xl h-96'>
                <div className="w-2/5">
                    <img className="rounded-l-xl" src={NewMain} alt="oops something wrong"/>
                </div>
                <div className="w-3/5 p-10">
                    <h2 className="text-center text-xl font-semibold mb-5">BITIRUVCHILARIMIZ 90% TALABA BO’LDI</h2>
                    <p className='text-lg leading-relaxed'>
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
