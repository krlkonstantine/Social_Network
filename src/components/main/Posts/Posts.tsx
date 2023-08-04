import React from 'react';
import s from './Posts.module.css';

export type PostType = {
    _id: string
    title: string
    descr: string
}

type PostsPropsType = {
    posts: Array<PostType>
}

export function Posts (props: PostsPropsType) {
    return (
        <div className={s.posts}>
            {props.posts.map(el => {
                return (
                    <div key={el._id} className={s.post}>
                        <h3 className={s.title}>{el.title}</h3>
                        <pre className={s.descr}>{el.descr}</pre>
                    </div>
                )
            })}
        </div>
    )
}