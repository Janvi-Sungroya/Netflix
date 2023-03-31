import React from 'react'
import List from './list/List'
import Navbar from './navbar/Navbar'
import Featured from './featured/Featured'


export default function Series() {
  return (
    <div className='series'>
      <Navbar />
      <Featured type="series"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}
