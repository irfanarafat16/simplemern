import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function FromNode(){
const [noder, setNoder] = useState('')
const [note, setnote] = useState({
        title: '',
        notebody: ''
    })
const iio = fetch('fromnodejs')

iio.then(response => response.text())
     .then(response => {
          setNoder(response)
     })
     .catch(error => {
          // handle error
     })

function takingInput(e){
    const {name, value} = e.target
    //console.log(value)
    setnote(() => {
      return {
          title: name,
          notebody: value
        };
    })
    }

function AddHandle(event){
    event.preventDefault()
    //console.log(note.title)
    console.log(note.notebody)

    axios.post('http://192.168.31.155:5000/store-data',
    {
        nt: note.title,
        nb: note.notebody,
        nnow: noder
        }
    )
      .then(function(response){
        console.log(response)
      })
      .catch(function(err){
        console.log(err)
      })
    setnote(() => {
        return {
          title: '',
          notebody: ''
        }
    })

}


return(<div>
<h3 style={{color: "blue"}}>{noder}</h3>
 <form>
        <input name="reacttest" onChange={takingInput} value={note.notebody} placeholder="Title" />
        <Button onClick={AddHandle} className='btn-primary'>Add</Button>
 </form>
</div>)

}

export default FromNode
