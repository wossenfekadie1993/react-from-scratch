interface props{
    text:String
}

const alert = (props:props) => {
  return (
    <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
  )
}

export default alert
