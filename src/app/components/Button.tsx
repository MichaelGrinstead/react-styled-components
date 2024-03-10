import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: string[];
  showShadow?: boolean;
  text?: string;
}

export const Button = ({ theme, showShadow, text, ...props }: ButtonProps) => {
  return (
    <div className="relative w-32 h-14">
      {showShadow && (
        <div className="absolute bg-retro-brown top-1 left-1 w-full h-full rounded-2xl"></div>
      )}
      <button className={classNames("relative", theme)} {...props}>
        {text ? text : "Button"}
      </button>
    </div>
  );
};
