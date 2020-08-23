import React from "react";
import './Card.css'



class CardCompleted extends React.Component{
  constructor(props){
    super(props)
    this.Para = React.createRef();
    this.makeInput = this.makeInput.bind(this);
  }
  makeInput = (e) => {
    let test;
    let key = e.target.value;
    if (key !== "undefined") {
      test = this.Para.current.innerHTML;
    } else {
      test = this.Para.current.innerHTML + e.target.value;
    }
    let edit = [this.props.id, test];
    this.props.handleEdit(edit);

    //this.Para.current.innerHTML = '<input value="" type="searchbox" />'
  };
  render(){
    const { name,  clickCheck, handleCheckBox } = this.props;
    return(
      <div className="pa2">
        <input
          className="center"
          type="checkbox"
          style={{height: "20px", width: "20px",display: 'inline-block'}}
          id="spacejam"
          onClick={() => {
            clickCheck()
            handleCheckBox(name);
          }}
          defaultChecked
        />
        <label
            style={{
              margin: "0",
              border: "none",
              borderRadius: "2px",
              width: "90%",
              padding: '6 px 1em 6px 8px',
              fontSize: "16px",
              paddingLeft: '10px',
              display: 'inline-block'
            }}
            className="pa2 ba  bg-gray"
            onKeyUp={this.makeInput}
            ref={this.Para}
            contenteditable="true"
          >
            {name}
          </label>
      </div>
    )
  }
}



export default CardCompleted;
