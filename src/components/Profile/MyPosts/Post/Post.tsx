import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    messageText: string
    likeCount: string
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_IJoWwGXHS0qw87UVN4x6MgmogrT2Tfq0A&usqp=CAU"
                alt=""/>
            {props.messageText}
            <div>
                <span><button className='liteItButton'>like it! <span className='likeCountIndicator'>{props.likeCount}</span> </button></span>
            </div>
        </div>
    )
}