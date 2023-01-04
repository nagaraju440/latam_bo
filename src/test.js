import { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext();

function CheckboxProvider({ children }) {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: true,
    });
  }

  return (
    <CheckboxContext.Provider value={{ checkboxes, handleCheckboxChange }}>
      {children}
    </CheckboxContext.Provider>
  );
}
function MyFunctionalComponent() {
    const { checkboxes, handleCheckboxChange } = useContext(CheckboxContext);
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxes.checkbox1}
            onChange={handleCheckboxChange}
          />
          Checkbox 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxes.checkbox2}
            onChange={handleCheckboxChange}
          />
          Checkbox 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxes.checkbox3}
            onChange={handleCheckboxChange}
          />
          Checkbox 3
        </label>
      </div>
    );
  }
  function App1() {
    return (
      <CheckboxProvider>
        <MyFunctionalComponent />
      </CheckboxProvider>
    );
  }
  export default App1;