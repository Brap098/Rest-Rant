const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.todo.name }</h1>
            <img src={ data.todo.pic } />
            <p> * { data.todo.list }</p>
            <h3>{ data.todo.user }</h3>

            <a href={`/todos/${data.id}/add`} className="btn btn-warning"> 
              Add+
            </a>  
            <a> / </a>
            <a href={`/todos/${data.id}/edit`} className="btn btn-warning"> 
               Edit
            </a>  
            <form method="POST" action={`/todos/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Complete!
              </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show


