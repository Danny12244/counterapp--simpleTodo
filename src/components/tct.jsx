import React from 'react'



const Tct = () => {
  const [todo,settodo] = React.useState([]);
  let [newTodo,setnewtodo] = React.useState('');
  const handleChange = (e)=>{
   
    setnewtodo (e.target.value)
  }
  
  
  return (
    < >
    <div className='tdapp'>
      
    {/* <div>Todo app</div> */}
  
   {todo.map(to =>(
     <div className="adj" key={to.id}>{to.value}</div>
     ))}


<input value={newTodo} placeholder="Write Something" onChange={handleChange} />
   <button  disabled={!newTodo} id="save" onClick={()=>{
     settodo([
       ...todo,{id:Date.now(),value:newTodo}
      ])
      setnewtodo('')
    }
  }>+</button>
     </div>

     
    </>
  )
}

export default Tct