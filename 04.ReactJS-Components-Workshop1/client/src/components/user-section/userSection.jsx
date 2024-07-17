import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";

const baseURL = 'http://localhost:3030/jsonstore'

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    //TODO

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseURL}/users`);
                const result = await response.json();
                const usersResult = Object.values(result);

                setUsers(usersResult);
            } catch (error) {
                alert(error.message);
            }


        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSaveHandler = async (e) => {
        //prevent refresh
        e.preventDefault();

        //get user data
        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };
        //make post request
        const response = await fetch(`${baseURL}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();
        //update local state
        setUsers(oldUsers => [...oldUsers, createdUser]);

        //close modal
        setShowAddUser(false);

    }

    return (
        <section className="card users-container">
            <Search />

            <UserList users={users} />

            {showAddUser && <UserAdd
                onClose={addUserCloseHandler}
                onSave={addUserSaveHandler}
            />}

            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />

        </section >
    );
}