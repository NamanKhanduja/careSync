import axios from "axios";
import React, { useContext, useState } from "react";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";

const Login = () => {

  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { setDToken } = useContext(DoctorContext);
  const { setAToken } = useContext(AdminContext);

  // Optional: Add loading state if desired
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(
          backendUrl + '/api/admin/login',
          { email, password }
        );
        if (data.success) {
          setAToken(data.token);
          localStorage.setItem('adminToken', data.token);
          toast.success("Admin logged in!");
          // Optionally, redirect here
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + '/api/doctor/login',
          { email, password }
        );
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem('doctorToken', data.token);
          toast.success("Doctor logged in!");
          // Optionally, redirect here
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // To clear fields on role switch
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>
          <span className='text-[#5f6FFF]'>{state}</span> Login
        </p>
        <div className='w-full '>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            type="email"
            required
            autoComplete="username"
          />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            type="password"
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className='bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base'
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {
          state === 'Admin'
            ? <p>
                Doctor Login?&nbsp;
                <span
                  onClick={() => { setState('Doctor'); clearInputs(); }}
                  className='text-[#5f6FFF] underline cursor-pointer'
                >Click here</span>
              </p>
            : <p>
                Admin Login?&nbsp;
                <span
                  onClick={() => { setState('Admin'); clearInputs(); }}
                  className='text-[#5f6FFF] underline cursor-pointer'
                >Click here</span>
              </p>
        }
      </div>
    </form>
  );
};

export default Login;
