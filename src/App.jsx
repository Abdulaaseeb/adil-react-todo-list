import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    list.push(text);
    setList([...list]);
  };

  let del = () => {
    list.pop(text);
    setList([...list])
  }

  let delAll = () => {
    setList([])
  }

  let update = (e) => {
    let inp = document.getElementById("inp")
    list.pop(text)
    list.push(inp.value)
    setList([...list])
  }

  let val;
  let edt = () => {
    let val = (<div className='div container'><div className="row">
      <div className="col-md-6 col-12">
      <input id='inp' className='mx-2 w-100' />
      </div>
      <div className="col-3">
      <button className='mx-2 p-2' onClick={update}>update</button>
      </div>
      </div>
      </div>)
    list.pop((text))
    list.push(val)
    setList([...list])
  }


  return (
    <div className="App">
      <div className='container maincontainer w-75 my-5 rounded'>
        <div className="row my-5">
          <div className="col-12 text-center mx-1">
            <input
              className='input'
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button className='addBtn my-1 px-2 mx-1' onClick={add}>Add</button>
            <button className='addBtn my-1 px-2 mx-1' onClick={delAll}>Delete All</button>
          </div>
        </div>

        {list.map((x, i) => (
          <div className='container my-2'>
            <div className="row paraorbutton py-1 mt-2">
              <div className=" col-6 text-start">
                <span className='span1 mt-3 ' key={i}>{x}</span>
              </div>
              <div className="col-6 text-end ">

                <span className='span2'><button className='editBtn px-2  my-1 mx-1' onClick={edt}>Edit</button><button className='deleteBtn px-2 my-1 mx-1' onClick={del}>Delete</button></span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>



  );
}

export default App;
