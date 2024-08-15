import React, { useRef } from 'react'
import './Home.css'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const schema = yup
  .object({
    firstname: yup.string().required('Firstname is required')
    .min(4, 'Firstname cannot be less than 4')
    .max(30, 'Firstname cannot be more than 30'),
    lastname: yup.string().required('Lastname is required')
    .min(4, 'Lastname cannot be less than 4')
    .max(30, 'Lastname cannot be more than 30'),
    age: yup.number().positive().integer().required('age is required')
    .min(1, 'age cannot be less than 1')
    .max(100, 'age cannot be more than 100'),
    contactnumber: yup.string().required('contact number is required')
    .matches(/^\d{9,11}$/, 'Contact number must be between 9 and 11 digits'),
    email: yup.string().required('email is required ')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email address is not valid'),
    streetaddress1: yup.string().required('street address is required')
    .min(4, 'enter a valid address'),
    streetaddress2: yup.string().required('street address line 2 is required')
    .min(4, 'enter a valid address'),
    city: yup.string().required('city is required')
    .min(4, 'enter a valid address'),
    stateorprovince: yup.string().required(`state/province is required`)
    .min(4, 'enter a valid address'),
    postalcode:  yup.string().required('Postal / Zip Code is required')
    .matches(/^\d{4,6}$/, 'Postal / Zip Code must be between 4 and 6 digits'),
    dancegenre: yup.string().required(`dance genre is required`)
    .min(5, 'enter a valid address')
    .max(1000, 'too many characters'),
  })
  .required()

export default function Home() {

    const form = useRef();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
    const onSubmit = (data,e) => {        

        emailjs.sendForm('service_a81tqe9', 'template_um93v3k', form.current, 'r6HzjsrpwyQ6FHIFo')
        .then(
        () => {
          console.log('SUCCESS!');
          toast("Message successfully sent !")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target[0].value = '', e.target[1].value = '', e.target[2].value = ''
      e.target[3].value = '', e.target[4].value = '', e.target[5].value = ''
      e.target[6].value = '', e.target[7].value = '', e.target[8].value = ''
      e.target[9].value = '', e.target[10].value = '',e.target[11].value = ''
      e.target[12].value = '',e.target[13].value = '',e.target[14].value = ''
      e.target[15].value = '',e.target[16].value = ''
      console.log(data)
    }

  return (
    <div className='homeContainer'>
        {/* sub container  */}
        <div className='homeContainer-main'>
            {/* form  */}
            <form className='form-content' ref={form} onSubmit={handleSubmit(onSubmit)}>
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
                                <input type="text" name="firstname" {...register('firstname')} />
                                <span className='header-3'>First Name</span>
                                <p className='errorText' >{errors.firstname?.message}</p>
                            </div>
                            <div  className='inner-inner'>
                                <input type="text"  name="lastname" {...register('lastname')} />
                                <span className='header-3'>Last Name</span>
                                <p className='errorText'>{errors.lastname?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <div className='inner-inner innerAge'>
                            <span className='header-2'>Age</span>
                            <input type="number" placeholder='enter age of child' name="age" {...register('age')}/>
                            <p className='errorText'>{errors.age?.message}</p>
                        </div>
                    </div>

                    <div className='inner2'>
                        <div className='inner2-content display-col'>
                            <div  className='inner-inner'>
                                <span className='header-2'>Contact Number</span>
                                <input type="number" placeholder='(000) 000-000' name="contactnumber" {...register('contactnumber')} />
                                <span className='header-3'>Please enter a valid phone number</span>
                                <p className='errorText'>{errors.contactnumber?.message}</p>
                            </div>
                            <div className='inner-inner'>
                                <h3 className='header-2'>Email Address</h3>
                                <input type="email" placeholder='email address ' name="email" {...register('email')} />
                                <span className='header-3'>example@example.com</span>
                                <p className='errorText'>{errors.email?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>Address</h3>
                        <div>
                            <input type="text" name="streetaddress1" {...register('streetaddress1')} />
                            <span className='header-3'>Street Address</span>
                            <p className='errorText'>{errors.streetaddress1?.message}</p>
                        </div>
                        <div>
                            <input type="text" name="streetaddress2" {...register('streetaddress2')} />
                            <span className='header-3'>Street Address Line 2</span>
                            <p className='errorText'>{errors.streetaddress2?.message}</p>
                        </div>
                        <div className='inner2-content'>
                        
                            <div className='inner-inner'>
                                <input type="text" name="city" {...register('city')} />
                                <span className='header-3'>City</span>
                                <p className='errorText'>{errors.city?.message}</p>
                            </div>
                            <div className='inner-inner'>
                                <input type="text" name="stateorprovince" {...register('stateorprovince')} />
                                <span className='header-3'>State / Province</span>
                                <p className='errorText'>{errors.stateorprovince?.message}</p>
                            </div>
                        </div>
                        <div>
                            <input type="text" name="postalcode" {...register('postalcode')} />
                            <span className='header-3'>Postal / Zip Code</span>
                            <p className='errorText'>{errors.postalcode?.message}</p>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>What are your days of availability </h3>
                        <div className='input2-container'>
                            <input type="checkbox" name='mondayavailable'{...register('mondayavailable')} className='input-2'/>
                            <span>Monday</span>
                        </div>
                        <div className='input2-container'>
                            <input type="checkbox" name='wednesdayavailable' {...register('wednesdayavailable')} className='input-2'/>
                            <span>Wednesday</span>
                        </div>
                        <div className='input2-container'>
                            <input type="checkbox" name='fridayavailable' {...register('fridayavailable')} className='input-2'/>
                            <span>Friday</span>
                        </div>
                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>What genre of dance would you like to apply for ?</h3>
                        <textarea className='textArea' name="dancegenre" id="" cols="30" rows="7" placeholder='Type here...' {...register('dancegenre')}></textarea>
                        <p className='errorText'>{errors.dancegenre?.message}</p>

                    </div>

                    <div className='inner-3'>
                        <h3 className='header-2'>Would you like to be notified for any of our classes after the summer </h3>
                        <div className='input2-container'>
                            <input type="radio" name='notified' {...register('notifyYes')} className='input-2'/>
                            <span>yes</span>
                        </div>
                        <div className='input2-container'>
                            <input type="radio" name='notified' {...register('notifyNo')} className='input-2'/>
                            <span>no</span>
                        </div>
                    </div>
                </div>

                <div className='inner-4'>
                    <input type="submit" value={'submit'} className='btn' />
                </div>
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}
