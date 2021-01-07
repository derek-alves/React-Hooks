import React from "react";
import TextField from "@material-ui/core/TextField";
// import { Container } from './styles';

interface InputProps {
  label: string;
  id: string;
  autoComplete: string;
  AutoFocus?:boolean;
}

const input: React.FC<InputProps> = ({ label, id, autoComplete,AutoFocus}) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={id}
      label={label}
      type={id}
      id={id}
      autoComplete={autoComplete}
      autoFocus={AutoFocus}
    />
  );
};

export default input;
