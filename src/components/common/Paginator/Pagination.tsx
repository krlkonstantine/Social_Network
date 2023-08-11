import React from 'react';
import s from './Pagination.module.css';


export type PaginationType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}


export const Pagination = ({pageSize, totalUsersCount, currentPage, setCurrentPage}: PaginationType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pages}>
            {pages.map(p => {
                return <span key={p} id={String(p)}
                             className={currentPage === p ? s.selectedPage : ''}
                             onClick={() => setCurrentPage(p)}
                >{p}</span>
            })}
            {pagesCount > 10 && <div className={s.pages}>
                <span>...</span>
                <span id={String(pagesCount)}
                      onClick={() => setCurrentPage(pagesCount)}
                      className={currentPage === pagesCount ? s.selectedPage : ''}
                >{pagesCount}</span>
            </div>}
        </div>
    )
}