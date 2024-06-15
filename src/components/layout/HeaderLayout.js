import React from 'react'
import { Outlet, } from 'react-router-dom'
import {PageHeader} from '../../components'

const HeaderLayout = () => {



  return (
    <div>
      <PageHeader title={"page"}/>
      <Outlet />
    </div>
  )
}

export default HeaderLayout