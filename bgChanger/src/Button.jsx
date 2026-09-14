function Button(props) {

  let red = () => {
    props.chng("red")
  }

  let green = () => {
    props.chng("green")
  }

  let blue = () => {
    props.chng("blue")
  }

  let pink = () => {
    props.chng("pink")
  }

  let yellow = () => {
    props.chng("yellow")
  }

  return (
    <>
      <button
        onClick={red}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Red
      </button>

      <button
        onClick={green}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Green
      </button>

      <button
        onClick={blue}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Blue
      </button>

      <button
        onClick={pink}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Pink
      </button>

      <button
        onClick={yellow}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Yellow
      </button>
    </>
  )
}

export default Button