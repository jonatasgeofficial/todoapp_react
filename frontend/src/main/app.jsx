import 'modules/materialize-css/dist/css/materialize.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className="row">
        <Todo />
        <About />
    </div>
)