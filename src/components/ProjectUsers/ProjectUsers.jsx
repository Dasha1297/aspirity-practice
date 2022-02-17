import React, { useState } from "react";
import "./ProjectUsers.css";
import Button from "../../UI/Button/Button";
import { v4 as uuid } from "uuid";

function ProjectUsers() {
  const dispatch = useDispatch();
  const projectUsers = useSelector((state) => state.projectUsersReducer.projectsUsers);

  return (
    <div className='project_users'>
      <div>                      
        {projects.map((project) => (
          <ProjectUsersItem key={projectUsers._id} dispatch={dispatch} projectUsers={projectUsers} />
        ))}
      </div>
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