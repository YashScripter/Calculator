import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonnames = [
    "7",
    "8",
    "9",
    "%",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+",
    "=",
    "C",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonnames.map((buttonname) => (
        <button className={styles.button} onClick={()=>{onButtonClick(buttonname)}}>
          {buttonname}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
