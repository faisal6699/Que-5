import React from "react";
import Card from "./Card";
import CardCompleted from "./CardCompleted";
import CardActive from "./CardActive";
import './Card.css'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickControll: [true, false, false, false],
      onActive: [],
    };

    this.handleActive = this.handleActive.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleAll = this.handleAll.bind(this);
    this.clickCheck = this.clickCheck.bind(this)
  }
  clickCheck(){
    const active = this.props.lists.filter((name) => {
      if (this.props.completedList.includes(name)) {
        return null;
      } else return name;
    });
    this.setState({ onActive: active });
  }

  handleAll() {
    this.setState({
      clickControll: [true, false, false, false],
    });
    const active = this.props.lists.filter((name) => {
      if (this.props.completedList.includes(name)) {
        return null;
      } else return name;
    });
    this.setState({ onActive: active });
  }

  handleActive() {
    //console.log(this.state.clickControll);
    this.setState({
      clickControll: [false, true, false, false],
    });

    const active = this.props.lists.filter((name) => {
      if (this.props.completedList.includes(name)) {
        return null;
      } else return name;
    });
    this.setState({ onActive: active });
  }

  handleComplete(event) {
    //console.log("completed");
    this.setState({
      clickControll: [false, false, true, false],
    });
    const active = this.props.lists.filter((name) => {
      if (this.props.completedList.includes(name)) {
        return null;
      } else return name;
    });
    this.setState({ onActive: active });
  }

  render() {
    const { lists, completedList } = this.props;
    const controll = this.state.clickControll;
    return (
      <div>
        {this.state.clickControll[0]
          ? lists.map((item, i) => {
              const check = completedList.includes(item) ? true : false;
              if (!check) {
                return (
                  <Card
                    name={item}
                    key={i}
                    id={i}
                    clickCheck = {this.clickCheck}
                    handleCheckBox={this.props.handleCheckBox}
                    Controll={controll}
                    handleEdit= {this.props.handleEdit}
                  ></Card>
                );
              } else {
                return (
                  <CardCompleted
                    name={item}
                    key={i}
                    id={i}
                    clickCheck = {this.clickCheck}
                    handleCheckBox={this.props.handleCheckBox}
                    Controll={controll}
                  ></CardCompleted>
                );
              }
            })
          : null}
        {this.state.clickControll[1]
          ? this.state.onActive.map((item, i) => {
              return (
                <CardActive
                  name={item}
                  key={i}
                  id={i}
                  clickCheck = {this.clickCheck}
                  handleCheckBox={this.props.handleCheckBox}
                  Controll={controll}
                 
                ></CardActive>
              );
            })
          : null}
        {this.state.clickControll[2]
          ? completedList.map((item, i) => {
              return (
                <CardCompleted
                  name={item}
                  key={i}
                  id={i}
                  clickCheck = {this.clickCheck}
                  handleCheckBox={this.props.handleCheckBox}
                  Controll={controll}
                ></CardCompleted>
              );
            })
          : null}
        
        <div className='dtc v-mid w-75 tr'>
         <h5 style={{ padding: "10px",  float: "left", textAlign: 'center',fontSize: '16px'}} className='f6 f5-ns dib ma2'>{lists.length-completedList.length} items left</h5>   
        <button style={{ padding: "10px",  float: "left", textAlign: 'center',fontSize: '16px'}} className='link dim  f6 f5-ns dib ma2 bg-near-black no-underline near-white bg-animate bg-near-black hover-bg-gray' onClick={() => this.handleAll()}>all</button>
        <button style={{ padding: "10px",  float: "left", textAlign: 'center',fontSize: '16px'}} className='link dim  f6 f5-ns dib ma2 bg-near-black no-underline near-white bg-animate bg-near-black hover-bg-gray' onClick={() => this.handleActive()}>active</button>
        <button style={{ padding: "10px",  float: "left", textAlign: 'center',fontSize: '16px'}} className='link dim  f6 f5-ns dib ma2 bg-near-black no-underline near-white bg-animate bg-near-black hover-bg-gray' onClick={() => this.handleComplete()}>completed</button>
        {this.state.clickControll[2] ? (
          <button style={{ padding: "10px",  float: "left", textAlign: 'center',fontSize: '16px'}} className='link dim  f6 f5-ns dib ma2 bg-near-black no-underline near-white bg-animate bg-near-black hover-bg-gray' onClick={this.props.handleClear}>Clear all completed</button>
        ) : null}
        </div>
      </div>
    );
  }
}

export default CardList;
