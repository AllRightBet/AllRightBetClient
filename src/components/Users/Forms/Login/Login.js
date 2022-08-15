import React, { useState } from 'react'




const Login = () => {

  const [email_input, setEmail] = useState("")
  const [password_input, setPassword] = useState("")



  function ValidateEmail() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email_input)
    ) { return (true) }

    alert("You have entered an invalid email address!")
    return (false)
  }

  // function ValidatePassword() {
  //   if (password_input.length < 6) {
  //     alert("Password must be at least 6 characters.")
  //     return false
  //   }
  //   return true
  // }



  const handleSubmit = (event) => {
    event.preventDefault();

    if (ValidateEmail()) {
      alert("Email Verified!")
      console.log(email_input)
      console.log(password_input)

    }
    else {
      alert("Please Enter Valid Email!")

    }


  }


  return (

    <>

      <form onSubmit={handleSubmit}>

        <label>
          <p>Username:</p>
          <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
        </label>

        <label>
          <p>Password:</p>
          <input onChange={(e) => { setPassword(e.target.value) }} type="password"  />
        </label>

        <input type="submit" />

      </form>

    </>

  )
}

export default Login