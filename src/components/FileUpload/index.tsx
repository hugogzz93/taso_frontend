import React, { useState } from "react";
import { InputParams } from "../../lib/types";
import styled from "styled-components";

const Span = styled("span")<{ message: string }>`
  background: transparent;
  color: white;
  font-weight: bolde
  &::after {
    content: '${props => props.message}'
  }
  &::before {
    content: 'Buscar'
  }
`;

const Label = styled.label`
  width: 100%;
  margin: 1rem;
`;

const FileUpload: React.FC<InputParams & { label: string }> = ({
  onChange,
  value,
  label
}) => {
  const message = value ? value.name : label;

  return (
    <Label className="file">
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
