import React, { useState } from "react";
import { InputParams } from "../../lib/types";

const FileUpload: React.FC<InputParams> = ({ onChange, value }) => {
  return (
    <div className="input__overlay">
      <input type="file" onChange={onChange} value={value} />
    </div>
  );
};
export default FileUpload;
