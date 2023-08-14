import React, {useState} from 'react';
import s from './Pagination.module.css';


export type PaginationType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    portionSize?: number
}


export const Pagination = ({
                               pageSize,
                               totalItemsCount,
                               currentPage,
                               setCurrentPage,
                               portionSize = 10
                           }: PaginationType) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [currentPortionNumber, setCurrentPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (currentPortionNumber - 1) * pageSize + 1
    let rightPortionPageNumber = currentPortionNumber * pageSize

    return (
        <div className={s.pages}>
            {currentPortionNumber > 1 && <button onClick={() => {
                setCurrentPortionNumber(currentPortionNumber - 1)
            }}>prev</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} id={String(p)}
                                 className={currentPage === p ? s.selectedPage : ''}
                                 onClick={() => setCurrentPage(p)}
                    >{p}</span>
                })}
            

            {portionCount > currentPortionNumber &&
                <button onClick={() => {
                    setCurrentPortionNumber(currentPortionNumber + 1)
                }}>next</button>}
        </div>
    )
}