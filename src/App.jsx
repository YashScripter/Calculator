import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import './App.css';

function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalval('');
    }
    else if (buttonText === '='){
      const result = eval(calval);
      setCalval(result);
    }
    else {
     const newDisplayValue = calval + buttonText;
     setCalval(newDisplayValue);
    }

    console.log(buttonText);
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
