interface props{
    children:String,
    color:String,
    onclick: ()=> void;
    
}

const Button = (props:props) => {
  return (
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  )
}

export default Button
