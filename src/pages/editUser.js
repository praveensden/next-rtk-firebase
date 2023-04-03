import { formInputData } from '@/data/formData';
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';

export default function EditUser () {
    const state = useSelector(state => state.usersReducer)
        const router = useRouter()

   function onSubmit(e) {
       e.preventDefault();
       console.log(router);
    }
    function handleChange() {
        console.log('HANDLE CHANGE');
    }
  return (
     <div className="form-box">
      <h1>Lets update your details</h1>
      <form onSubmit={onSubmit}>
        {formInputData.map(({name,placeholder,type}) => {
          return    <input key={name} name={name} placeholder={placeholder} type={type} onChange={handleChange} />

        })}
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

