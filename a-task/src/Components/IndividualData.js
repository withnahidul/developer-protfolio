import React from 'react'

export const IndividualData = ({individualData,index}) => {
    return (
        <tr>
            <th>{index}</th>
            <th>{individualData.name}</th>
            <th>{individualData.sector}</th>
           
        </tr>
    )
}
