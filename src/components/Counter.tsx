import Button from "./ui/Button"
function Counter () {
  return (
    <div>
      <h3>Counter: 0</h3>
      <div className="flex justify-center mb-10">
        <Button>Increase</Button>
      </div>
    </div>
  )
}

export default Counter