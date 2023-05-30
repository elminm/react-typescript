import {Users} from "./models/Users";

export default function UsersPage(item:Users){
    return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                    <td>{item.address.city}</td>
                </tr>
    )
}