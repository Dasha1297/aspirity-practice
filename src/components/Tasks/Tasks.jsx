import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import _ from "lodash";
import style from "./Tasks.module.css";
import { useDispatch } from "react-redux";
import {
  getAllTasks,
  removeStatus,
  setNewStatus,
  updateStatus,
  updateTask,
} from "../../redux/actions/tasksActions";
import { useEffect } from "react";
import AddTask from "./AddTask/AddTask";
import {
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_TO_DO,
} from "../../redux/consts";
import TaskCard from "./TaskCard/TaskCard";
import { useParams } from "react-router";

const Tasks = () => {
  const state = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();
  const boardID = useParams().boardsId;

  useEffect(() => {
    dispatch(getAllTasks(boardID));
  }, []);

  const handleDragEnd = async ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const item = { ...state[source.droppableId].items[source.index] };
    switch (destination.droppableId) {
      case "todo":
        item.statusId = STATUS_TO_DO;
        break;
      case "progress":
        item.statusId = STATUS_IN_PROGRESS;
        break;
      case "testing":
        item.statusId = STATUS_TESTING;
        break;
      case "done":
        item.statusId = STATUS_DONE;
        break;
      default:
        break;
    }
    dispatch(
      removeStatus({ droppableId: source.droppableId, index: source.index })
    );
    const newItem = await dispatch(updateStatus(item));
    if (newItem) {
      dispatch(
        setNewStatus({
          droppableId: destination.droppableId,
          index: destination.index,
          item: newItem,
        })
      );
    }
  };

  return (
    <div className={style.tasks}>
      <AddTask boardID={boardID} />
      <div className={style.tasks__table}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return (
              <div className={style.column} key={key}>
                <h2>{data.title}</h2>
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        {...provided.dragHandleProps}
                        className={style.drop__column}
                      >
                        {data.items.map((el, index) => {
                          return (
                            <Draggable
                              key={el._id}
                              index={index}
                              draggableId={el._id}
                            >
                              {(provided) => {
                                return <TaskCard provided={provided} el={el} />;
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Tasks;
