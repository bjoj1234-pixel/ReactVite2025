import ProductItem from './ProductItem'

export default function ProductList(props){

    return(
        <div>
            <ul>
                <ProductItem data={props.data}/>
            </ul>
        </div>
    )

}