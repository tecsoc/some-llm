import React from "react";

type TextInputProps = {
  placeholder: string;
  // value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const TextInput = ({ placeholder, onChange, className }: TextInputProps) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default React.memo(TextInput);