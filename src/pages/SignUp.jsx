import React from 'react'

const SignUp = () => {
  return (
    <div className='register'>
      <div className="signup-container">
  <h1 className="signup-title">Create Your Account</h1>
  <form className="signup-form">
    <div className="form-group">
      <label htmlFor="fullname">Full Name</label>
      <input type="text" 
      id="fullname" 
      name="fullname" 
      placeholder="Enter your name" 
      required/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" 
      id="email" 
      name="email" 
      placeholder="example@email.com"
       required/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password"
       id="password" 
       name="password" 
       placeholder="Enter your password" 
       required/>
    </div>
   
   
    <div className="form-group">
      <button className="signup-button">Sign Up</button>
    </div>
    
  </form>
</div>

    </div>
  )
}

export default SignUp