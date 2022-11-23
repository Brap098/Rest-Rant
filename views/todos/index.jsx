const React = require('react')
const Def = require('../default')

function index (data) {
  let todosFormatted = data.todos.map((todo) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/todos/${todo.id}`}>
          {todo.name}
          </a>
          </h2>
          <img src={todo.pic} alt={todo.name} />
        
        <p className="text-center">
        Todo: {todo.list}
        </p>
        <p className="text-center">
          {todo.user}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Todo List</h1>
            <div className="row">
              {todosFormatted}
            </div>
        </main>
    </Def>
  )
}

  
module.exports = index
