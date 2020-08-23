import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  const {
    inputValue,
    handleInputChange,
    submitHandle,
    list,
    handleDelete,
  } = props;
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={submitHandle}>提交</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleDelete(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      dispatch({
        type: "change_input_value",
        value: e.target.value,
      });
    },
    submitHandle() {
      dispatch({
        type: "add_item_list",
      });
    },
    handleDelete(index) {
      dispatch({
        type: "delete_item_value",
        index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
