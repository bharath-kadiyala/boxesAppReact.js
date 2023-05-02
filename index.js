const Box = (props) => {
  const { className, text } = props;
  const eachBoxSty = `common-box-sty ${className}`;
  return (
    <div className={eachBoxSty}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-main-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="first-box" text="small" />
      <Box className="second-box" text="Medium" />
      <Box className="third-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
