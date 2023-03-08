import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/logo/4957136.jpg'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [isActive, setIsActive] = useState(false);
    const { SignIn, signInEmailPassword } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm();
    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState({
        signInError: "",
        googleError: "",
    });

    const onSubmit = (data) => {
        signInEmailPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                toast.success("Successfully login", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            })
            .catch(err => {
                console.log(err.message);
                setError({ ...error, loginError: err })
            })

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })
        return promise;
    }
    const handleGoogleSignIn = () => {
        console.log("dbajsbhj");
        SignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login With Google success")
            })
            .catch(err => {
                setError({ ...error, googleError: err })
            })
    }
    return (
        <div className='max-w-5xl mx-auto grid grid-cols-2 bg-gray-100 pt-24'>
            <div className='w-full shadow-md max-h-full'>
                <img src={img} alt="" className='' srcset="" />
            </div>
            <div>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <div className='flex justify-center space-x-2'>
                        <Link to='/login'>
                            <button onClick={() => setIsActive(!isActive)} className={`uppercase text border-b-2 font-bold  ${isActive ? 'border-b-2 text-green-700 border-green-700' : 'text-gray-500 border-gray-500'}`}>Login</button>
                        </Link>
                        <Link to="/sign_up">
                            <button onClick={() => setIsActive(!isActive)} className={`uppercase text border-b-2 font-bold  ${!isActive ? 'border-b-2 text-green-700 border-green-700' : 'text-gray-500 border-gray-500'}`}>sign Up</button>
                        </Link>
                    </div>
                    <div className="space-y-4 mt-5">
                        <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label for="email" className="block text-sm">Email address</label>
                                <input type="email"
                                    {...register("email", { required: "Email name is required" })}
                                    aria-invalid={errors.email ? "true" : "false"} id="email"
                                    placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                {errors.email && <small role="alert" className='text-red-500'>{errors.email?.message}</small>}
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label for="password" className="text-sm">Password</label>
                                </div>
                                <input type="password" {...register("password", {
                                    required: "This is required", minLength: {
                                        value: 6,
                                        message: "Your password should be at least 6 characters"
                                    }
                                })}
                                    id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                {errors.password && <small role="alert" className='text-red-500'>{errors.password?.message}</small>}
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-green-900  text-gray-100 dark:bg-green-900 dark:text-gray-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;