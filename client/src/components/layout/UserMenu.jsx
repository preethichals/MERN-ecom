import Layout from 'antd/es/layout/layout'
import React from 'react'
import { useAuth } from '../../context/auth'

function UserMenu() {
    const [auth] = useAuth('')
   return (
    <>
    <Layout title='User dashboard'>
      <div className="text-center"></div>
      <div className="list-group">
        <h3 className=' mx-4'> {auth?.user?.name} Dashboard</h3>
        
       
      </div>
      </Layout>
    </>
  )
}

export default UserMenu