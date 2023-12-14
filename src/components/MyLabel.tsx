import './MyLabel.css';

interface Props{
  /**
   * Text To Display
   */
  label: string;
  /**
   * Label Size
   */
  size?: 'normal'|'h1'|'h2'|'h3'; 
  /**
   * Capitalize all letters?
  */
  allCaps? : boolean;
  /**
   * Label Colour
  */
  color?: 'text-primary'|'text-secondary'|'text-tertiary'
  /**
   * Font Color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  allCaps=false,
  color,
  fontColor,
  size='normal',
}:Props) => {
  return (
    <span 
      className={`label ${size} ${color}`}
      style={{ color:fontColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
