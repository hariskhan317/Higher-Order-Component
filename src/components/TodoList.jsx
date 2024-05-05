import React from 'react'
import HocSearchAndFetch from '../HigherOrderComponent/HocSearchAndFetch'

const TodoList = ({data}) => {
    return (
        <div>
            <h3>{data}</h3>
        </div>
    )
}

const EnhancedTodoList = HocSearchAndFetch(TodoList,'todos');

export default EnhancedTodoList;
