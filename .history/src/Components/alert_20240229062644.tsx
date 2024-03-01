interface props{
    text:String
}

const alert = (props:props) => {
  return (
    <div className="alert alert-primary" role="alert">
  {text}
</div>
  )
}

export default alert
