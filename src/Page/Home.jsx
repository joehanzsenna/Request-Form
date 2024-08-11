import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='homeContainer'>
        {/* sub container  */}
        <div className='homeContainer-main'>
            {/* form  */}
            <form className='form-content'>
                <div className='inner'>
                    <h1 className='header-1 gap-b1'>Request Form</h1>
                    <h3 className='header-3'>Fill in your details !</h3>
                </div>

                {/* border  */}
                <div className='inner-border'>
                        
                    <div className='inner2'>
                        <h3 className='header-2'>Full Name </h3>
                        <div className='inner2-content'>
                            <div  className='inner-inner'>
                                <input type="text" />
                                <span className='header-3'>First Name</span>
                            </div>
                            <div  className='inner-inner'>
                                <input type="text" />
                                <span className='header-3'>Last Name</span>
                            </div>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <div className='inner-inner innerAge'>
                            <span className='header-2'>Age</span>
                            <input type="number" placeholder='enter age of child' />
                        </div>
                    </div>

                    <div className='inner2'>
                        <div className='inner2-content display-col'>
                            <div  className='inner-inner'>
                                <span className='header-2'>Contact Number</span>
                                <input type="number" placeholder='(000) 000-000' />
                                <span className='header-3'>Please enter a valid phone number</span>
                            </div>
                            <div className='inner-inner'>
                                <h3 className='header-2'>Email Address</h3>
                                <input type="email" placeholder='email address ' />
                                <span className='header-3'>example@example.com</span>
                            </div>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>Address</h3>
                        <div>
                            <input type="text" />
                            <span className='header-3'>Street Address</span>
                        </div>
                        <div>
                            <input type="text" />
                            <span className='header-3'>Street Address Line 2</span>
                        </div>
                        <div className='inner2-content'>
                        
                            <div className='inner-inner'>
                                <input type="text" />
                                <span className='header-3'>City</span>
                            </div>
                            <div className='inner-inner'>
                                <input type="text" />
                                <span className='header-3'>State / Province</span>
                            </div>
                        </div>
                        <div>
                            <input type="text" />
                            <span className='header-3'>Postal / Zip Code</span>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>What are your days of availability </h3>
                        <div className='input2-container'>
                            <input type="checkbox" name='Monday' className='input-2'/>
                            <span>Monday</span>
                        </div>
                        <div className='input2-container'>
                            <input type="checkbox" name='Wednesday' className='input-2'/>
                            <span>Wednesday</span>
                        </div>
                        <div className='input2-container'>
                            <input type="checkbox" name='Friday' className='input-2'/>
                            <span>Friday</span>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>What genre of dance would you like to apply for ?</h3>
                        <textarea className='textArea' name="" id="" cols="30" rows="7" placeholder='Type here...'></textarea>

                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>Would you like to be notified for any of our classes after the summer </h3>
                        <div className='input2-container'>
                            <input type="radio" name='notified' className='input-2'/>
                            <span>yes</span>
                        </div>
                        <div className='input2-container'>
                            <input type="radio" name='notified' className='input-2'/>
                            <span>no</span>
                        </div>
                    </div>
                </div>

                <div className='inner-4'>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
