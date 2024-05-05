import React from 'react'
import HocSearchAndFetch from '../HigherOrderComponent/HocSearchAndFetch'

const DataList = ({data}) => {
    return (
        <div> 
            <h3>{data}</h3>
        </div>
    )
}

const EnhancedDataList = HocSearchAndFetch(DataList, 'users');

export default EnhancedDataList
