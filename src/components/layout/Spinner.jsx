import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router'

const Spinner = () => {
    const [count, setCount] = useState(4)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const intervel = setInterval(() => {
            setCount((prevValue) => --prevValue)
        },1000)
        count === 0 && navigate('/login',{
            state: location.pathname
        })
        return () => clearInterval(intervel)
    },[count,navigate,location])
  return (
  <> 
  <strong>Loading...</strong>
    <div className="d-flex flex-column justify-content-center align-content-center " style={{Height:'100vh'}}>
  <div className="spinner-border" role="status">
    
  </div>
</div>
</>
  )
} 

export default Spinner