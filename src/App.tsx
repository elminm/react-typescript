import { useEffect } from "react";
import {Users} from "./models/Users";
import UsersPage from "./UsersPage";
import {getUsers} from "./redux/usersSlice.js";
import {useAppDispatch, useAppSelector} from "./redux/store.ts";
function App() {
  const {users,loading,error} = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch()
  useEffect(() => {
  dispatch(getUsers('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch]);
  return (
        <>
          {
              error && <h1>Error Occured</h1>
          }
          {
            loading && <h1>Loading...</h1>
          }
          {
            users && <table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Street</th>
                  <th>City</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((item:Users)=>
                    <UsersPage key={item.id} {...item}/>
                )
                }
                </tbody>
              </table>
          }
        </>
  )
}
export default App;
