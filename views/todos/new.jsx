const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Todo</h1>
            <form method="POST" action= "/todos" /*{`/todos/${data.id}?_method=PUT`}*/>
                <div className="form-group">
                    <label htmlFor="name">Todo Name</label>
                    <input className="form-control" id="name" name="name" required />
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

module.exports = new_form
