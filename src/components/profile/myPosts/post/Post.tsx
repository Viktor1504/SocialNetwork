import React from 'react';
import s from './Posts.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src={'https://yt3.googleusercontent.com/--0u2skhWRGZMCj5mNXIXLmbXeR4Y-ftUigVYN0Ide2RJe3SyHTc5PfyaGapNH097_rQtzz9nk4=s900-c-k-c0x00ffffff-no-rj'}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
