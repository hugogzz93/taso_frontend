import React, { useState } from "react";
import { InputParams } from "../../lib/types";
import styled from "styled-components";

const Span = styled("span")<{ message: string }>`
  background: transparent;
  color: black;
  font-weight: bold;
  &::after {
    content: '${props => props.message}';
    position: absolute;
    left: 1rem;
  }
  &::before {
    content: 'Buscar'
  }
`;

const Label = styled.label`
  width: 100%;
`;

const FileUpload: React.FC<InputParams & { label: string }> = ({
  onChange,
  value,
  label
}) => {
  const message = value ? value.name : label;
  const styles = {
    backgroundColor: "#e8f0fe"
  };
  return (
    <Label className="file" style={value ? styles : {}}>
      <input
        type="file"
        onChange={onChange}
        id="file"
        aria-label="File browser example"
      />
      <Span className="file-custom" message={message}></Span>
    </Label>
  );
};
export default FileUpload;
