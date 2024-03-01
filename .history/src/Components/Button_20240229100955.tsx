import MouseEvent  from "react";

interface props{
    children:String,
    color:'primary' | '',
    onclick: ()=> void;
    
}

const Button = (props:props) => {
  return (
    <div>
      <button type="button" className= {"btn btn-" + props.color} onClick={props.onclick} >{props.children}</button>
    </div>
  )
}

export default Button
