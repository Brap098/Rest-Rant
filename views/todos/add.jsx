const React = require('react')
const Def = require('../default.jsx')

function add_form (data) {
    return (
        <Def>
          <main>
            <h1>Add Todo</h1>
            <form method="POST" action= {`/todos/${data.id}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="pic">Todo Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="list">list</label>
                    <input className="form-control" id="list" name="list" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Todo" />
            </form>



          </main>
        </Def>
    )
}

module.exports = add_form