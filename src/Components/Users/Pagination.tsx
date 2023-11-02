import React, {FC} from 'react';
import s from './Users.module.css';

type PaginationType = {
    setCurrentPage: (page: number) => void
    totalCountUser: number
    pageSize: number
    page: number
}

export const Pagination: FC<PaginationType> = (props) => {

    const {setCurrentPage, totalCountUser, pageSize, page} = props

    const pagesCount = Math.ceil(totalCountUser / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const setCurrentPageHandler = (numPage: number) => () => setCurrentPage(numPage)

    return (
            <div> {pages.map((el) => {
                return (
                    <button className={page === el ? s.selectedPage : ''}
                            onClick={setCurrentPageHandler(el)}
                            key={el}>
                        {el}
                    </button>
                )
            })}
            </div>
    )
};
