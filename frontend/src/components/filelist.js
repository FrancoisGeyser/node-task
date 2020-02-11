import React,{useState} from 'react'

const List = (props) => {
    const { list } = props
   return list.map((item) => {
        return (
            <li>{item}</li>
        )
    })
}

export default List