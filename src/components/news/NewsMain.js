import React from 'react'
import NewMain from "../../assets/images/news1_1.png"
const NewsMain = () => {
    return (
        <div>
            <h1 className='text-center pb-8 tracking-wider text-2xl '>YANGILIKLAR</h1>
        <div className='flex gap-12'>
                <img src={NewMain} alt="" />
                <div>
                    <h2 className='text-center text-xl'>BITIRUVCHILARIMIZ 90% TALABA BO’LDI</h2>
                    <p className='text-lg pt-6 leading-relaxed'>Bu mavsumdagi bitiruvchilarimizning 90 dan ortig’i  1 - 20 chi  
                        Avgustga qadar bo’lib o’tgan Davlat Kirish Imtihonlarida 
                        muvafaqqiyatli tarzda yuqori ballar bilan talaba bo’lish 
                        baxtiga erishdi. <br /> <br />

                        Abiturenetlarimizning 27 tasi Toshkent shaxridagi chet-el 
                        feliali bo’lmish Turin Politnika, Webster, Inha, Westminister, 
                        Gupkina, You Ju va Lomosov kabi nufuzli Universitetlarning 
                        Grant asosida talabasi bo’ldilar. <br /> <br />

                        10 dan oshiq abiturientlarimiz esa IELTS va TOPIC dan olgan 
                        yuqori ballari va matematika fanidan erishgan yutuqlari orqali 
                        AQSH, Kanada, Dubay va Xitoyning TOP 100 talik Universitetlarida 
                        Grant asosida o’qishni Oktabr oyidan boshlaydilar.</p>
                </div>
            </div>
        </div>
    )
}

export default NewsMain
