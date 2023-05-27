import loading from '@/components/Loading'
import {Button} from "antd";
const Login = () => {
  const handleClick = () => {
    loading.show();
    setTimeout(() => {
      loading.hide()
    }, 1000)
  }
  return (
    <>
      <h1>hello</h1>
      <Button onClick={handleClick}>button</Button>
    </>
  )
}

export default Login