import React from 'react'

interface LoginButtonProps {
  disabled?: boolean
}

const LoginButton: React.FC<LoginButtonProps> = ({ disabled }) => {
  return (
    <div className="flex justify-center items-center bg-white w-full">
      <div className={`chat-button border-2 border-backGroundButton w-full ${disabled ? 'opacity-50' : ''}`}>
        <button 
          type="submit"
          disabled={disabled}
          className="button-box text-white cursor-pointer p-[16px] w-full disabled:cursor-not-allowed"
        >
          {disabled ? 'در حال ورود...' : 'ورود'}
        </button>
      </div>
    </div>
  )
}

export default LoginButton
