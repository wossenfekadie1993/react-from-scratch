interface props{
    children:String,
    color:String,
    onclick: ()=> void;
    
}

const Button = (props:props) => {
  return (
    <div>
      <button type="button" className="btn btn-primar">Primary</button>
    </div>
  )
}

export default Button
