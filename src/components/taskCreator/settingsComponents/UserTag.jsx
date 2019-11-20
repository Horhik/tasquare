import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../../../store";
import { addTagById, deleteTagById } from "../../../actions/taskCreatorActions";

const UserTag = props => {
  const [selected, controlSelect] = useState(props.isSelected);
  const showLight = props.color > 170 && props.color < 296;
  const tagStyle = selected
    ? {
        color: `hsl(${props.color}, 90%, 80%)`,
        backgroundColor: `hsl(${props.color}, 40%, 30%)`,
        borderColor: `hsl(${props.color}, 100%, 50%)`
      }
    : {
        color: `${showLight ? "white" : "black"}`,
        backgroundColor: `hsl(${props.color}, 100%, 50%)`,
        borderColor: `hsl(${props.color}, 100%, ${showLight ? "70%" : "35%"})`
      };

  const addToTask = () => {
    controlSelect(!selected);
    if (!selected) {
      props.addTagById(props.id, store.getState().userData.tags);
    } else {
      props.deleteTagById(props.id);
    }
  };
  return (
    <mark
      onClick={!props.inList ? addToTask : null}
      className={`tag tag__on-creating ${selected ? "tag__selected" : ""}`}
      style={{
        cursor: "pointer",
        ...tagStyle
      }}
    >
      {props.text}
    </mark>
  );
};
//TODO create DnD function of deleting tags from userTags and currentTask
//TODO create search function then user click on tag in made up tusk
export default connect(
  state => ({}),
  {
    addTagById,
    deleteTagById
  }
)(UserTag);
