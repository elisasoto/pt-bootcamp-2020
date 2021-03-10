import "./index.scss";

export default function Toggle({switchClass, buttonClass , onClick}) {    

  return (
    <>
      <label className={`switch ${switchClass}`} onClick={onClick}>
        <div className={`switchbtn ${buttonClass}`} onClick={onClick}/>
      </label>
    </>
  );
}
