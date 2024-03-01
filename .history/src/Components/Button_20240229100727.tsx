import MouseEvent  from "react";

interface props{
    children:String,
    color:String,
    onclick: ()=> void;
    
}

const Button = (props:props) => {
  return (
    <div>
      <button type="button" className= {"btn btn-" + props.color}onClick={onclick} >{props.children}</button>
    </div>
  )
}

export default Button
