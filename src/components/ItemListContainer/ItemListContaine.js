import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {useState, useEfefect, } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    useEfefect (() => {
        getProducts().then(response => {
            console.log(response)
        })
    }, [])
    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
             <ItemList />
        </div>
        
    )
}

export default ItemListContainer