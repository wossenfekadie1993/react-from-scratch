import './App.css'
import Button from './Components/Button'
// import Alert from './Components/alert'
// import ListGroup from './Components/ListGroup';
// import ShoppingList from './Components/Products';

function App() {
  let items = ["banana", "orange", "apple", "strawberry", "pineapple"];
  let onclose=()=>void

  return (
    <div >
      <Button color='primary' onclick={onclose} children="click me" />

      {/* <Alert>Hello world</Alert> */}
      {/* <ShoppingList/>
      <ListGroup 
      items={items}
      heading="cities"/> */}
      
      </div>
  )
}

export default App