import React from "react";

const Form = props => (
    <div style={{textAlign:'center'}}>
        <form onSubmit={props.saveTask} style={{backgroundColor:"lightgreen"}}>
        <fieldset className="shadowed">
            <legend>TODO FORM BY JOEL OKONIHA USING REACT</legend>
            <input type="text" placeholder="Task" name="task"/>
            <button className="shadowed inverse">Submit</button>
            <p>{props.errmssg}</p>
        </fieldset>
        </form>
    </div>
);

export default Form;