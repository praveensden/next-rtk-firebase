import { formInputData } from "@/data/formData";
import { addUsers } from "@/features/users/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4} from 'uuid'

export default function UserForm() {
  const router = useRouter()
  console.log(router.query);
  const dispatch = useDispatch();
  const state = useSelector(state => state.usersReducer)
  const [userData, setUserData] = useState({
      id:v4(),
        name: '',
        email: '',
        age: '',
        designation:''
    });
  async function onSubmit(e) {
    e.preventDefault();
    dispatch(addUsers(userData))
    router.push('/about')
    }
    
  const handleChange = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value})
    }
  return (
    <div className="form-box">
      <h1>Lets get you registered</h1>
      <form onSubmit={onSubmit}>
        {formInputData.map(({name,placeholder,type}) => {
          return    <input key={name} name={name} placeholder={placeholder} type={type} onChange={handleChange} />

        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}