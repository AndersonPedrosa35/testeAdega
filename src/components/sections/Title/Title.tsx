
import { ITitle } from './typings'
import './title.scss'

function Title({ text, className }: ITitle) {
  return <h2 className={`title ${className}`}>{text}</h2>
}

export default Title
