import React, { useState } from "react";
import "./ProjectUsers.css";
import Button from "../UI/Button/Button";
//import { v4 as uuid } from "uuid";

function ProjectUsers() {
  //const dispatch = useDispatch();
  //const projectUsers = useSelector((state) => state.projectUsersReducer.projectsUsers);
  const [projectUsers, setProjectUsers] = useState([
    {
      name: "John Doe",
      email: "akrays@aspirity.com",
    },
    {   
      name: "Ivan Petrov",
      email: "petrpetr@aspirity.com",   
    }
  ]);

  return (
    <div className='project_users'>
      <p>* Здесь будет отображаться список пользователей проекта</p>
      {/* <div>                      
        {projectUsers.map((projectUser) => (
          <div key={projectUsers.email}  className='project_users_item'>{projectUser.email}</div>
        ))}
      </div> */}
      <Button
        type='button'
        text={"Добавить нового пользователя"}
        width={250}
        onClick={() => console.log('open add modal')}
      />
    </div>
  );
}

export default ProjectUsers;