import React, {useState} from 'react';
import axios from "axios";

const MainInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        let bot ={
            BaseUrl: "https://api.telegram.org/bot",
            TOKEN: "5295935062:AAEJ2tVYHG5E7qO7-7GyLWhA2QMALVo6rFw",
            chatId: "1703698442"
        }

        axios.get(`${bot.BaseUrl + bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${"ismi: " + name + "%0Aemail: " + email + "%0Atel: " + phoneNumber + "%0Amurojat: " + description}`)
            .then(res => {
                if (res){
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    setDescription('');
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="bg-blue-500 p-5 my-10">
            <div className="container mx-auto">
                <h1 className="text-white text-2xl font-semibold uppercase text-center mb-3 pb-3">ONLINE MUROJAAT</h1>
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input className="py-3 px-5 rounded-xl" type="text" placeholder="Your Name" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)}/>
                        <input className="py-3 px-5 rounded-xl" type="email" placeholder="E-mail" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <input className="py-3 px-5 rounded-xl" type="number" placeholder="+998 (00) 000-00-00" name="number" id="number" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <textarea className="py-3 px-5 rounded-xl text-gray-400" placeholder="Savolingiz..?" name="textarea" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}> </textarea>
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <button type="submit" className="text-lg bg-white font-semibold rounded-xl px-5 py-2 text-blue-500">Yuborish</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainInfo;