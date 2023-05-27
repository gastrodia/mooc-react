import {Spin} from 'antd'
import ReactDOM from 'react-dom/client'
import type {SpinProps} from 'antd'

class Loading {
  private container = document.createElement('div')
  private root = ReactDOM.createRoot(this.container)
  private count = 0
  private readonly config: SpinProps | undefined

  private setContainerStyle() {
    Object.assign(this.container.style, {
      position: 'fixed',
      inset: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, .1)'
    })
  }

  constructor(config?: SpinProps) {
    this.config = config
    this.setContainerStyle()
  }

  show(config?: SpinProps) {
    if (!this.count) {
      const props = config || this.config
      this.root.render(<Spin {...props}/>)
      document.body.appendChild(this.container)
    }
    this.count += 1;
  }

  hide() {
    this.count -= 1;
    if (this.count <= 0) {
      document.body.removeChild(this.container)
    }
  }
}

export default new Loading()