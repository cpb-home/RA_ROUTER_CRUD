import styles from './button.module.css'

interface IButton {
  text: string;
  color: 'red' | 'blue';
  handleClick?: () => void;
}

const Button = ({ text, color, handleClick }: IButton) => {

  const colorClass = color === 'blue' ? styles["button-blue"] : styles["button-red"];

  return (
    <div>
      <button className={styles["button"] + ' ' + colorClass} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button