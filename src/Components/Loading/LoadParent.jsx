import React from 'react'
import LoadChild from './LoadChild'
import CenterLogo from './CenterLogo'

function LoadParent() {
  return (
    <div>
      <div className='h-1 w-full bg-transparent fixed z-50'>
        <LoadChild/>
        
      </div>
    </div>
  )
}

export default LoadParent
