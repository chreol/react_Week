import React, { Component} from 'react';

class ToDoList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Get out of bed, Wed Sep 13 2017</li>
                    <li>Brush teeth, Thu Sep 14 2017</li>
                    <li>Eat breakfast, Fri Sep 15 2017</li>
                </ul>
            </div>
        )
    }
}

export default ToDoList;