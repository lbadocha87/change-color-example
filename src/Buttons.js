const Buttons = (props) => {
  return (
    <div className="buttons">
        <button onClick={()=>{props.updateColor('red')}}>red</button>
        <button onClick={()=>{props.updateColor('green')}}>green</button>
        <button onClick={()=>{props.updateColor('blue')}}>blue</button>
      </div>
  );
};

export default Buttons
