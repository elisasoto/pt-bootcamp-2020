import './index.scss'

const icons =  {
 accept:'🛫', 
 add: '🦾',
}

const Button = ({ text = '', type = '' }) => {
    return (
      <div className={`button button--hover button--${type}`}>
        <label className="button__text button--hover">{text.toUpperCase()}</label>
        <label className="button__icon button--hover">{icons[type]}</label>
      </div>
    )
  }
  
  export default Button