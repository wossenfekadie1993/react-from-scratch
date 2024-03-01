interface props{
    text:String
}

const alert = (props:r) => {
  return (
    <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
  )
}

export default alert
