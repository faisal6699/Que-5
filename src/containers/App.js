import React, { Component} from "react";
import { connect } from "react-redux";
import SearchField from "../components/SearchField";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import "./App.css";
import {
  setSearchField,
  setUpdateLists,
  setCompletedLists,
  setCompletedClear,
  setHandleEdit,
} from "../Actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchLists.searchField,
    list: state.updateLists.list,
    length: state.updateLists.length,
    completedList: state.updateLists.completedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onUpdateLists: (value) => dispatch(setUpdateLists(value)),
    completedLists: (index) => dispatch(setCompletedLists(index)),
    completedClear: () => dispatch(setCompletedClear()),
    handleEdit: (edit) => dispatch(setHandleEdit(edit)),
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.onhandleChange = this.onhandleChange.bind(this);
  }
  onhandleEdit = (edit) => {
    this.props.handleEdit(edit);
  };

  handleCheck = (name) => {
    this.props.completedLists(name);
  };

  onhandleClear = () => {
    this.props.completedClear();
  };

  onhandleChange(e) {
    if (e.key === "Enter") {
      this.props.onUpdateLists(this.props.searchField);
    }
  }
  render() {
    const { onSearchChange, list, length, completedList } = this.props;

    return (
      <div className="tc">
        <div className="header">
          <h1>TODOS</h1>
          <SearchField
            searchChange={onSearchChange}
            handleChange={this.onhandleChange}
          />
        </div>

        {length > 0 ? (
          <Scroll>
            <CardList
              lists={list}
              handleCheckBox={this.handleCheck}
              completedList={completedList}
              handleClear={this.onhandleClear}
              handleEdit={this.onhandleEdit}
            />
          </Scroll>
        ) : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
