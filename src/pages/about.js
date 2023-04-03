import { addUsers, getUsers, updateUser } from "@/features/users/userSlice";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData] = useState(data)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
  const users = useSelector(state => state.usersReducer)
  const dispatch = useDispatch()
  console.log(users,'sss');

  useEffect(() => {
       dispatch(getUsers())
      setData(users)
      setFilteredData(users)
    }, [])
    const handleEdit = (item) => {
    router.push('/editUser',{item})
    }
    const handleDelete = (user) => {
    const filteredItems = filteredData.filter((item)=>(item.id !== user.id))
    setFilteredData(filteredItems)
}
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;

    return (
        <>
             {/* <Head>
      	<title>About | My Cool Site</title>
        <meta name="description" content="You really need to read this website because it's made with Next.js" />
      </Head>
    <div className="form-box" style={{width:"100%"}}>
          <h1>User List</h1>
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {filteredData.map((user) => {
                        return <tr key={user.id} >
                            <td >{ user.id}</td>
                            <td >{ user.name}</td>
                            <td >{ user.age}</td>
                            <td >{ user.email}</td>
                            <td >{ user.designation}</td>
                            <td><button onClick={()=>handleEdit(user)}>
                                        Edit                    </button> </td>
                            <td ><button onClick={()=>  handleDelete(user)}>Delete</button> </td>
                      </tr>
                  })}
                </tbody>
          </table>
                      </div> */}

      </>
  );
}


