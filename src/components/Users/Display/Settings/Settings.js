import React, { useEffect } from 'react'
import SignUpForm from '../../Forms/SignUp/SignUpForm'

const Settings = ({ user, setUser }) => {

  return (
    <SignUpForm
      isSetting={true}
      isAdmin={false}
      user={user}
      setUser={setUser} />
  )
}

export default Settings