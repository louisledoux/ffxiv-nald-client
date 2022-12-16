import React from 'react';

type ButtonProps = {
  text: string,
  type: 'button' | 'submit' | 'reset',
  color: string,
  textColor?: string,
  secondary?: boolean,
  loading?: boolean
  disabled?: boolean,
  // eslint-disable-next-line no-unused-vars
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
function Button({
  text,
  type,
  color,
  textColor,
  secondary,
  loading,
  disabled,
  handleClick,
}: ButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type}
      className={`transition ease-in-out duration-150
        ${secondary
        ? `text-${color}-500 border border-${color}-500 hover:bg-${color}-500 hover:text-${textColor}-50`
        : `bg-${color}-500 text-${textColor}-50`}
        active:bg-${color}-600
        px-4 py-3 rounded-md
      `}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  textColor: 'gray',
  secondary: false,
  loading: false,
  disabled: false,
  handleClick: undefined,
};

export default Button;
