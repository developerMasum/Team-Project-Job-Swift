
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


import Swal from 'sweetalert2';
import { authContext } from '../../Auth/AuthProvider';



const SignIn = () => {
    const { createUser, updateUserProfile } = useContext(authContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    // const [error, setError] = useState(null)
    // const location = useLocation()
    // const navigate = useNavigate()

    // const from = location.state?.from?.pathname || '/'

    const onSubmit = (data) => {
        console.log(data)
        console.log(data.password)
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(data);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                   

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Profile Update !!',
                            showConfirmButton: false,
                            timer: 1500
                        })


                    }).catch((error) => {
                        console.log(error);
                    });
                // navigate(from, { replace: true })
            })
    }


    return (

        <div className="px-4 lg:md:px-24 lg:md:w-1/2 mx-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body rounded-xl shadow-2xl  border border-green-600">
                <div className='text-center text-2xl font-bold'>
                    <h1 className=''>Sign In Now</h1>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text"  {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your name" className="input input-bordered" />
                    {errors.name?.type === "required" && <p role="alert" className='text-red-500'>This field is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="text"  {...register("photoURL", { required: true, maxLength: 1000 })} placeholder="Enter your PhotoUrl" className="input input-bordered" />
                    {errors.photoURL?.type === "required" && <p role="alert" className='text-red-500'>photoURL is required</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"   {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
                        placeholder="password" className="input input-bordered" />

                    {errors.password && <span className='text-red-500'>This field is required</span>}

                    {errors.password?.type === "minLength" && <span className='text-red-500'>Password Must be Six Character</span>}
                    {errors.password?.type === "pattern" && <span
                        className='text-red-500'>At least one uppercase letter, one lowercase letter, one number and one special character</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <small className='text-center text-fuchsia-700 my-3'>Already have an account,Login Now<span><Link className='btn btn-outline btn-sm ml-4' to="/login">LogIn</Link></span></small>
                <div className="form-control mt-6">
                    <input type="submit" placeholder="" value='SignUp' className="input input-bordered btn btn-outline" />
                </div>

             
            </form>

        </div>

    );
};

export default SignIn;