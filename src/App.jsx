import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState([])
  useEffect(() => {
    fetch('/Data.json')
     .then(res => res.json())
     .then(data => {
      setImage(data.residential_estates)
      console.log(data.residential_estates)
     })
  },[count])

  const prevHandle =(e) => {
    e.preventDefault()
    if(count <= 0 ){
      setCount(image?.length - 1)
    }else{
      setCount(count - 1)
    }


  }

  const nextHandle = (e) => {
    e.preventDefault()
    // console.log('next')
    if( count >= image?.length - 1 ){
      console.log('next')
      setCount(0)
    }else {
      setCount(count + 1)
    }
  }

  console.log(count)
  return (
    <div>
     <img src={image[count]?.image} />
     <div className='buttons'>
      <button onClick={prevHandle}>Previous</button>
      <button onClick={nextHandle}>Next</button>
     </div>
    </div>
  )
}

export default App
