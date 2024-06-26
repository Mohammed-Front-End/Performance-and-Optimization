import Button from "./ui/Button"
import Input from "./ui/Input"
import Textarea from "./ui/textarea"
function LoginForm () {
  return (
    <form className="space-y-3 max-w-sm mx-auto">
      <Input placeholder="UserName"/>
      <Input placeholder="Emaol addres"/>
      <Input placeholder="Password"/>
      <Textarea placeholder="Message"/>
      <Button fullWidth> Send Feedback</Button>
    </form>
  )
}

export default LoginForm