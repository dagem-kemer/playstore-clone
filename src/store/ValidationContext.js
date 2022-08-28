import { createContext, useState } from "react";

export const ValidationContext = createContext({
  validate: false,
  fields: {},
  invalidFields: new Set(),
  validateFileds: (field, isValid) => {},
  onValidate: () => {},
  addFields: (field, value) => {},
});

const ValidationContextProvider = ({ children }) => {
  const [validate, setValidate] = useState(null);
  const [invalidFields, setInvalidFields] = useState(new Set());
  const [fields, setFields] = useState({});

  const validateFileds = (field, isValid) => {
    setInvalidFields((prevState) => {
      const newState = new Set(prevState);
      if (isValid) newState.delete(field);
      else newState.add(field);
      return newState;
    });
  };

  const addFields = (label, value) => {
    setFields((prevFields) => {
      const newFields = { ...prevFields };
      newFields[label] = value;

      return newFields;
    });
  };

  return (
    <ValidationContext.Provider
      value={{
        validate,
        invalidFields,
        fields,
        validateFileds,
        addFields,
        onValidate: () => setValidate((prev) => !prev),
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export default ValidationContextProvider;
