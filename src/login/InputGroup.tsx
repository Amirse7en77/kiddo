import { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginButton from './LoginButton'
import { login } from '../api'
import { setUser } from '../slice/userSlice'
import { useNavigate } from 'react-router-dom'

const InputGroup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await login(username, password)
      console.log(response.user)
      dispatch(setUser({
        id: response.user.id,
        username: response.user.username,
        first_name: response.user.first_name,
        last_name: response.user.last_name,
        role: response.user.role,
        token: response.token
      }))
      
      // Navigate based on role
      if (response.user.role === 'STUDENT') {
        navigate('/student')
      } else if (response.user.role === 'STAFF') {
        navigate('/teacher')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'خطا در ورود به سیستم')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center rounded-[24px] p-[40px] space-y-6 bg-white border-[2px] border-borderColor-1 rounded-b-none'>
      {error && (
        <div className='w-full text-right text-red-500 text-sm mb-4'>
          {error}
        </div>
      )}
      <div className='w-full mb-[16px]'>
        <p className='mb-[12px] text-right text-[14px] font-extrabold'>نام کاربری</p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='p-[16px] rounded-[16px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
      </div>
      <div className='w-full mb-[40px]'>
        <p className='mb-[12px] text-right text-[14px] font-extrabold'>کد ورود</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-[16px] rounded-[16px] border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          required
        />
      </div>
      <LoginButton disabled={loading} />
    </form>
  )
}

export default InputGroup