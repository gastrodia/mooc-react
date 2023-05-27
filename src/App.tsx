import {ConfigProvider} from 'antd'
import {router} from './router'
import {RouterProvider} from "react-router-dom";
const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={router}/>
    </ConfigProvider>
  )
}

export default App