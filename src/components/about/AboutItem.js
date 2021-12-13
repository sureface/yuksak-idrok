import React from 'react'
import styled from 'styled-components';
import EachItem from './EachItem';
import Item2 from "../../assets/images/aboutItem2.png"
import Item1 from "../../assets/images/aboutItem1.png"
import Item3 from "../../assets/images/aboutItem3.png"

const AboutItem = () => {
    return (
        <AboutItemStyled>
            <EachItem ItemTitle={"2020 - yil Oktabr oyi "} image={Item1} title={"Yuksak Idrok"} text={"2020 - yil 1-oktabr oyi YUKSAK IDROK O`quv Markaziga asos solingan kun. Dastlab markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar to`lishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa guruhlar soni bir necha barobar ortib, ikkinchi filial ochishni ham rejalashtirmoqdamiz.Quvonarlisi, markazimiz bitiruvchilari yurtimizning etiborli Universitetlariga grant va kontrakt asosida talaba bo`lishda davom etmoqda."} link={"/video"} />
            
            <EachItem ItemTitle={"Markaz asoschisi "} image={Item2} title={"Akmalov Anvar"} text={"2020 - yil 1-oktabr oyi YUKSAK IDROK O`quv Markaziga asos solingan kun. Dastlab markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar to`lishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa guruhlar soni bir necha barobar ortib, ikkinchi filial ochishni ham rejalashtirmoqdamiz.Quvonarlisi, markazimiz bitiruvchilari yurtimizning etiborli Universitetlariga grant va kontrakt asosida talaba bo`lishda davom etmoqda."} link={"/asoschi"}/>
            
            <EachItem  ItemTitle={"Bizning maqsadimiz   "} image={Item3} title={"1 000 000 - IT "} text={"1997-yil 31-avgustda Toshkent shahrining Mirzo Ulug`bek tumanida tavallud topgan. 2016-2020-yillarda Toshkent Turin Politexnika Universitetini tamomlagan.2020-yil 1-oktyabrda YUKSAK IDROK O`quv Markaziga asos solgan.Quvonarlisi, markazimiz bitiruvchilari yurtimizning turli xil Universitetlartalabasi bo`lishga erishdi.Maqsadimiz, bir necha yillardan so`ng hambosib o`tilgan yo`lning qiymati va qimmati qalblarimizni faqat va faqat faxr va shukronaga to`ldirsin ..."} link={"/maqsad"}/> 
        </AboutItemStyled>
    )
}
const AboutItemStyled = styled.div`
display: flex;
gap: 30px;
margin-top: 40px;

`

export default AboutItem
