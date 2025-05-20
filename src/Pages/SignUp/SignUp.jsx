import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import lottiee from "../../lottiee/Animation - 1746386920745.json"
const SignUp = () => {
const {createUser,updateUser,user,setUser,googleSignin}=use(AuthContext)



const handleSubmit=e=>{
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log({ name, email, photoURL, password });
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  if (!passwordRegex.test(password)) {
     Swal.fire(
        'Password must be at least 8 characters, include 1 uppercase letter, 1 lowercase letter, and 1 special character.'
      );
      return;
    }

    createUser(email,password)
    .then(res=>{
      const profile={displayName:name,

photoURL:photoURL

}
updateUser(profile)
.then(()=>{
  setUser(...user,profile)
})
    
      Swal.fire({
  title: "Good job!",
  text: "signup done sucessfully!!",
  icon: "success"
});
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
  }).catch(err=>{
      Swal.fire({
  title: "Opps?",
  text: `${err.message}`,
  icon: "question"
});
  })
}
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
      <div className=''><Lottie  animationData={lottiee} loop={true} /></div>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          <label className="label" >Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
          <label className="label" >Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label" >photoURL</label>
          <input type="text" name='photoURL' className="input" placeholder="photoURL" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Signup</button>
          
        </form>

        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;