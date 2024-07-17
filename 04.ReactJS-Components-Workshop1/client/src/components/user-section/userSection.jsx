import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import UserList from "./user-list/UserList";

const baseURL = 'http://localhost:3030/jsonstore'

export default function UserSection() {
    const [users, setUsers] = useState([]);

    //TODO

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseURL}/users`);
                const result = await response.json();
                const users = Object.values(result);

                setUsers(users);
            } catch (error) {
                alert(error.message);
            }


        })();
    }, []);

    return (
        <section className="card users-container">
            <Search />

            <UserList users={users} />

            {/* <!-- New user button  --> */}
            <button className="btn-add btn">Add new user</button>

            <Pagination />

        </section >
    );
}