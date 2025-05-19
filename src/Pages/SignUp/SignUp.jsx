import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const SignUp = () => {
const {name}=use(AuthContext)
console.log(name);

const handleSubmit=e=>{
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log({ name, email, photoURL, password });

}


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup now!</h1>
      
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
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;