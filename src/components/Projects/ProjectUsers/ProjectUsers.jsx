import React, { useState } from "react";
import "./ProjectUsers.css";
import Button from "../../UI/Button/Button";
import { v4 as uuid } from "uuid";

function ProjectUsers() {


  return (
    <div className='project_users'>
      <p>( Здесь будет отображаться список пользователей проекта )</p>
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