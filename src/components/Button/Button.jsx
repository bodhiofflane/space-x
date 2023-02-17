import './button.scss';

const Button = ({children}) => {
  return <button onClick={() => alert('Шатл у подъезда')} className="btn">{children}</button>;
}
 
export default Button;