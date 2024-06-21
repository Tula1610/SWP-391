import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SummaryApi from '../../common';

const ChangePassword = () => {
  const [error] = useState('')
  const user = useSelector(state => state?.user?.user);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //Enter old password and new password
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

/*  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword' || name === 'newPassword') {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        newPassword: prev.newPassword, // Giữ nguyên giá trị new password từ trước
        confirmPassword: value, // Chỉ cập nhật giá trị confirm password
      }));
    }
  };*/

  const handleOnChange = (e) => {
    const { name , value } = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (data.newPassword === data.oldPassword) {
      toast.error("The old password and the new password must be different");
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      toast.error("Please check new password and confirm password");
      return;
    }

    try {
      const response = await fetch(SummaryApi.changePassword.url, {
        method: SummaryApi.changePassword.method,
        headers: {
          "Content-Type": "application/json",
          // Uncomment and set the Authorization header if needed
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("An error occurred while trying to change the password");
      console.error("Error:", error);
    }
  };
  
  

  return (
    <>
      <div className='contentChangePassWord'>
        <div className='container'>
          <div className='container-heading'><h1>Change Password</h1></div>
          <form onSubmit={handleSubmit}>

            <div className='avatar'>
              <img src='Logo.png' alt='' />
            </div>
            <div className='user-name'><h1> {user?.name} </h1></div>

            <div className='change'>
              <div className='change-password'>

                <div className='input-group mb-3'>
                  <div className="input-group-addon">Old Password</div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={data.oldPassword}
                    name='oldPassword'
                    onChange={handleOnChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-addon">New Password</div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your new password"
                    value={data.newPassword}
                    name='newPassword'
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-addon">Confirm Password</div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={data.confirmPassword}
                    name='confirmPassword'
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>                  
            </div>
            <span>
                  {error && <p className="error">{error}</p>}
                  </span>
                  <div class="checkbox">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={toggleShowPassword}
                    />Show Password
                  </div>
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
