import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {GrLinkNext } from "react-icons/gr"

const EachItem = ({ItemTitle, image, title , text, link}) => {
    return (
        <EachItemStyled>
            <div>
            <h1 className='item__title'>{ItemTitle}</h1>
            <img src={image} alt="rasm" />
            </div>
            <div className="item__info">
                <h2 className="info__title">{title}</h2>
                <p className="info__text">
                    {text}
                </p>
                
            </div>
            <div className="next__icon">
                    <Link className='next' to={link}><GrLinkNext/> </Link>
            </div>
        </EachItemStyled>
    )
}

const EachItemStyled = styled.div`
box-shadow: 2px 3px 10px #1C1C1C70;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
background-color: #F4F4F4;
border-radius: 15px;
img{
    width: 100%;
    height: 270px;
}
.item__title{
    margin: 20px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #1C1C1C;
    font-size: 20px;
    text-align: center;
}
.item__info{
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .info__title{
        line-height: 150%;
        letter-spacing: 0.05em;
        color: #1C1C1C;
        font-size: 19px;
    }
    .info__text{
        font-size: 17px;
        line-height: 170%;
        letter-spacing: 0.09em;
        color: #1C1C1C; 
        font-weight: 300;
    }
   
}
.next__icon{
        display: flex;
        padding: 20px;
        justify-content: flex-end;
        .next{
            border: 2px solid #1C1C1C;
            border-radius: 50%;
            padding: 10px;
            color: #1C1C1C;
        }
    }
`

export default EachItem
