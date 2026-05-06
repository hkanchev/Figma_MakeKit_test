import { ButtonProps } from './Button.types'
import '../../styles.css'

export function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  rightIcon,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color/neutral/000)',
          color: '#fafafa',
          border: 'none',
        }
      case 'secondary':
        return {
          backgroundColor: 'var(--surface/default)',
          color: 'var(--light-text)',
          border: '1px solid var(--color/neutral/600)',
        }
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: 'var(--brand/accent)',
          border: '1px solid var(--brand/accent)',
        }
      default:
        return {}
    }
  }

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'small':
        return {
          padding: `var(--xs)px var(--sm)px`,
          fontSize: '14px',
        }
      case 'medium':
        // Match Figma: 8px vertical, 16px horizontal
        return {
          padding: `var(--xs)px var(--md)px`,
          fontSize: '16px',
        }
      case 'large':
        return {
          padding: `var(--sm)px var(--xl)px`,
          fontSize: '18px',
        }
      default:
        return {}
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...getVariantStyles(),
        ...getSizeStyles(),
        borderRadius: `var(--rounded-sm)px`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rightIcon ? `var(--xs)px` : '0',
      }}
      {...rest}
    >
      {children}
      {rightIcon && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '16px',
            height: '16px',
          }}
        >
          {rightIcon}
        </span>
      )}
    </button>
  )
}
