import { useSelector } from "react-redux";
import "./ProjectUsers.css";

function ProjectUsers() {
  //const projects = useSelector((state) => state.projectReducer.projects);

  const allProjectUsers = [
    {
      id: 321,
      email: 'falseUser1@mail.com'
    },
    {
      id: 322,
      email: 'falseUser1@mail.com'
    }
  ]

  return (
    <select name='Project users' className='select__users'>
      <option>Пользователи проекта</option>
      {allProjectUsers.map((allProjectUsers) => (
        <option key={allProjectUsers.id}>{allProjectUsers.email}</option>
      ))}
      <option>Добавить пользователя</option>
    </select>
  );
}

export default ProjectUsers;