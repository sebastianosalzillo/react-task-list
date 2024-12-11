import tasks from './tasks';
import './app.css';

function App() {


 



  const taskListBacklog = () => {

    const filteredTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");


    return filteredTasks.map(task => <li key={task.id}>

        <h3>{task.title} </h3>
        <section>
        <p>Priorita : {task.priority}</p>
        <p>Tempo stimato : {task.estimatedTime}</p>
        </section>
        
      </li>

      );
  };



  const taskListCompleted = () => {
    const filteredTasks = tasks.filter(task => task.state === "completed");

    return filteredTasks.map(task => <li key={task.id}>
        <h3>{task.title}</h3>
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
          <ul>{taskListBacklog()}</ul>
        </div>
        <hr />
        <div>
          <h2>Task completate</h2>
          <ul>{taskListCompleted()}</ul>
        </div>
      </>
      );
}

      export default App;
