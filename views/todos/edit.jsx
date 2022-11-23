const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Todo</h1>
            <form method="POST" action= {`/todos/${data.id}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="name">Todo Name</label>
                    <input className="form-control" id="name" name="name" value={data.todo.name} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Todo Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="list">list</label>
                    <input className="form-control" id="list" name="list" />
                </div>
                <div className="form-group">
                    <label htmlFor="user">User</label>
                    <input className="form-control" id="user" name="user" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Todo" />
            </form>



          </main>
        </Def>
    )
}
/*router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!todos[id]) {
        res.render('error404')
    }
    else {
      res.render('todos/edit', { todo: todos[id] })
    }
  })*/
  
  
module.exports = edit_form
