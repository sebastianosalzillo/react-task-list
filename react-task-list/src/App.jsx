import tasks from './tasks';
import './app.css';

function App() {






  const taskListBacklog = () => {

    const filteredTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");


    return filteredTasks.map(task => <li key={task.id}>
      <section className='d-flex'>
        <h3 className='task-title'>{task.title}</h3>
        <p className='status-non-copleto'>In progresso</p>
      </section>
      <p>Priorita : {task.priority}</p>
      <p>Tempo stimato : {task.estimatedTime}</p>


    </li>

    );
  };



  const taskListCompleted = () => {
    const filteredTasks = tasks.filter(task => task.state === "completed");

    return filteredTasks.map(task => <li key={task.id}>
      <section className='d-flex'>
        <h3 className='task-title'>{task.title}</h3>
        <p className='status'>Completate</p>
      </section>
      <p>Priorita : {task.priority}</p>
      <p>Tempo stimato : {task.estimatedTime}</p>
    </li>)
  };


  return (
    <>
      <div className='title'>
        <h1>Gestore Task</h1>
      </div>
      <div>
        <h2>Task in progresso</h2>
        <ul className='non'>{taskListBacklog()}</ul>
      </div>
      <hr className='linea' />
      <div>
        <h2 className='non'>Task completate</h2>
        <ul>{taskListCompleted()}</ul>
      </div>
    </>
  );
}

export default App;
