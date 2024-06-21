import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
//import SummaryApi from '../../common';

const UserProfile = () =>{
  const [error] = useState('')
  const user = useSelector(state => state?.user?.user);


  const [data, setData] = useState({
    Fullname: "",
    Gender: "",
    Address: "",
    Birthday: "",
    PhoneNumber: "",
    Email: "",
  });

  const handleOnChange = (e) => {
    const { id , value } = e.target

    setData((preve)=>{
      return{
        ...preve,
        [id] : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.PhoneNumber.length < 10) {
      toast.error("Phone number must have 10 digits");
      return;
    }

/*
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
    }*/
  };

    return(
        <>
      <div className='contentProfile' >
        <div className='container' >
          <div className='container-heading' ><h1>Profile</h1></div>
          <form onSubmit={handleSubmit}>

            {/*Avatar*/}
              <div className = 'avatar'>
                <img src='assets/imgs/avatar.jpg' alt='' />
              </div>
                <div className = 'customer-name'><h1>{user?.name}</h1></div>
                <div className = 'change'><button className='btn-change' type='file' accept="image/*">Change Avatar</button></div>
                
            {/*Enter info of customer*/}
            <div className='row align-items-center' >
              <div className='col-6' >
                <div className='input-group mb-3' >
                <div class="input-group-text">Full Name</div>
                  <input 
                    type='text'
                    value={data.Fullname}
                    className='form-control'
                    id='fullname'
                    onChange={handleOnChange}
                    placeholder='Enter your fullname'
                  />
                </div>
              </div>

              <div className='col-6' >
                <div className='input-group mb-3' >
                  <div class="input-group-text">Date Of Birth</div>
                  <input
                    type='text'
                    value={data.Birthday}
                    className='form-control'
                    id='date-of-birth'
                    onChange={handleOnChange}
                    placeholder='dd/mm/yyyy'
                  />
                </div>
              </div>
            </div>

            <div className='row align-items-center' >
              <div className='col-6' >
                <div className='input-group mb-3' >
                  <div class="input-group-text">Gender</div>

                  <div className='col-2' >
                    <div className='form-check' >
                      <input class="form-check-input" type="radio" value="Male" name='gender' id='male' />
                      <label className='form-check-label' for='male'>Male</label>
                    </div>
                  </div>
                  
                  <div className='col-2' >
                    <div className='form-check' >
                      <input class="form-check-input" type="radio" value="Female" name='gender' id='female' />
                      <label className='form-check-label' for='female'>Female</label>
                    </div>
                  </div>

                </div>
              </div>

              <div className='col-6' >
                <div className='input-group mb-3' >
                  <div class="input-group-text">Phone Number</div>
                  <input
                    type='text'
                    value={data.PhoneNumber}
                    className='form-control'
                    id='phone-number'
                    onChange={handleOnChange}
                    placeholder='Phone Number'
                  />
                </div>
              </div>
            </div>

            <div className='row align-items-center' >
              <div className='col-6' >
                <div className='input-group mb-3' >
                  <div class="input-group-text">Address</div>
                  <input
                    type='text'
                    value={data.Address}
                    className='form-control'
                    id='address'
                    onChange={handleOnChange}
                    placeholder='123 Paster'
                  />
                </div>
              </div>
              <div className='col-6' >
                <div className='input-group mb-3' >
                  <div class="input-group-text">Email</div>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    onChange={handleOnChange}
                    placeholder='@gmail.com'
                  />
                </div>
              </div>
            </div>

            {/*Requst button*/}
            <button className='btn btn-success' type='submit' >Update</button>
            <div className = 'link'><li className='nav-item' ><a className='nav-link' href='#' >Change Password</a></li></div>
            
          </form>
        </div>
      </div>
      </>
    );
}
export default UserProfile;