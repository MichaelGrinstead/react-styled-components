import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: string[];
  showShadow?: boolean;
}

export const Input = ({ theme, showShadow, ...props }: InputProps) => {
  return (
    <div className="relative w-72 h-12">
      {showShadow && (
        <div className="absolute bg-retro-brown top-1 left-1 w-full h-full rounded-2xl"></div>
      )}
      <input className={classNames("relative", theme)} {...props} />
    </div>
  );
};
