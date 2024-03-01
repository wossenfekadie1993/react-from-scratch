interface props{
    children:String
}

const alert = (props:props) => {
  return (
    <div className="alert alert-primary" role="alert">
  {props.children}
</div>
  )
}

export default alert
