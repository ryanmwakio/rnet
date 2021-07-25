import React from 'react';

const Login = () => {



        const [formData,setFormData]=React.useState({email:'',password:''});
    
        const {email,password}=formData;
    
        const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value});
    
        const onSubmit=async (e)=>{
            e.preventDefault();
    
            if(password&&email){
              console.log('Passwords do not match');
          }else{
             console.log('success');
          }
            
        }

    return (
        <>
  
     <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={e=>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
   
        </>
    );
}

export default Login;
