import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
const {signInUser, googleSignin}=use(AuthContext)
  const navigate=useNavigate()
    const location=useLocation()
const handleSubmit=e=>{
     e.preventDefault()

    const form = e.target;
  
    const email = form.email.value;

    const password = form.password.value;

    console.log( email, password );


    signInUser(email,password)
        .then(res=>{
          
        
          Swal.fire({
      title: "Good job!",
      text: "login done sucessfully!!",
      icon: "success"
    });
     setTimeout(()=>{navigate(`${location?.state?location?.state:"/"}`)},2000)
    form.reset('')
        }).catch(err=>{
          console.log(err.message);
        
          Swal.fire({
      title: "Opps?",
      text: `${err.message}`,
      icon: "question"
    });
    
        })
}
const handleGoogle=()=>{
  googleSignin()
  .then(res=>{
      Swal.fire({
  title: "Good job!",
  text: "signup done sucessfully!!",
  icon: "success"
  
});
  setTimeout(()=>{navigate(`${location?.state?location?.state:"/"}`)},2000)
  }).catch(err=>{
      Swal.fire({
  title: "Opps?",
  text: `${err.message}`,
  icon: "question"
});
  })
}
    return (
         <div className="hero bg-green-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-green-600 font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          
          <label className="label" >Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
       
          {/* <button className="btn btn-neutral mt-4">Login</button> */}
          <div className='w-full flex justify-center'> <button className="btn bg-green-600 text-Black w-4/5 mt-4">Login</button></div>
          <p className='text-green-600 font-bold'>Don't have Account Signup First
          <Link to="/signup"> <button className="text-red-600  btn bg-green-600">Signup</button></Link></p>
          
        </form>
       
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;
