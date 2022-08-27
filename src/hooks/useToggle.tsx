import React, { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const toggle = () => {
    setValue((val) => !val);
  };
  return { value, toggle };
};

export default useToggle;
