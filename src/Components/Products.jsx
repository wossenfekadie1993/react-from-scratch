const products=[
    {title:'cabbage',isFruit:false, id:1},
    {title:'Garlic',isFruit:false, id:2},
    {title:'Apple',isFruit:true, id:3},
]

export default function ShoppingList(){
    const listItems= products.map(product=>{
        <li
        key={product.id}
        style={
            {color:product.isFruit ? 'magenta' :'darkgreen' }
        }
        >
            {products.title}
        </li>
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
} 