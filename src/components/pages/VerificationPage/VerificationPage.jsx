import React,{useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const url = "https://trackfundz-wmhv.onrender.com/api/v1/verification"

const Verify = () => {

  const { token } = useParams()
  // console.log(id)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)
  const handleSubmit = async () => {
      try {
          const response = await axios.patch(`${url}/${token}`)
          // console.log(response)
          setLoading(true);
          setTimeout(() => {
          response.status === 200 ?  navigate('/login') : null
          }, 3000);
      } 
      catch (error) {
        setError("Verification Failed") 
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {
      handleSubmit()
    }, [])


    const style = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
    }
  return (
<div style={style} className='verify'>
      {loading ? (
        <h1>Please Wait...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <h1>Your verification was successful</h1>
    )}
</div>
  )
}

export default Verify
