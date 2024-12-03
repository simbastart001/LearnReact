import React from "react";
import { useState } from "react";

interface Props {
  text: string;
  onClose: () => void;
}

const Alert = ({ text, onClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{text}</strong> Simbarashe!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
