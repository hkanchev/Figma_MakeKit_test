export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary'

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean

  /**
   * Optional icon to display on the right side of the button
   */
  rightIcon?: React.ReactNode

  /**
   * Button content
   */
  children: React.ReactNode

  /**
   * Click handler
   */
  onClick?: () => void
}
