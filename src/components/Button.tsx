import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button type="button" onClick={onClick} className="btn btn-success">
        {children}
      </button>
    </div>
  );
};

export default Button;
