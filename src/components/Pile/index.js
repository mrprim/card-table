import React from 'react'
import './index.scss'

const Pile = ({ className, title, children, dropRef, isOver }) =>
  <div className={`pile ${className || ''} ${isOver ? 'is-over' : ''}`} ref={dropRef}>
    <div className='title'>{title}</div>
    <div className='contents'>
      {children}
    </div>
  </div>

export default Pile
