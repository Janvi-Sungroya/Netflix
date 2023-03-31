import React from 'react'
import List from './list/List'
import Navbar from './navbar/Navbar'
import Featured from './featured/Featured'


export default function Movies() {
  return (
    <div className='movies'>
      <Navbar />
      <Featured type="movies"/>
      <List/>
      <List/>
      <List/>
      <List/>
      
    </div>
  )
}
