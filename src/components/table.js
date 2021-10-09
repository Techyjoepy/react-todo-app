import React from "react";

const Table = props => (
    
    <div style={{textAlign:'center'}}>
        <h3>TODOS</h3>
        <ol style={{textAlign:"left"}}>
        {props.data.map((d)=>{ return(<li key={d.id}>{d.task}<span className="icon-help" onClick={e => props.delTodo(e, d.id)} style={{marginLeft:"22px"}}></span></li>) })}
        </ol>
    </div>
);

export default Table;