import Card from "../UI/Card";
import classes from "./Users.module.css";

const UsersList = (props) => {
    console.log("users===>", props.users);
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {

                    return <li key={user.id}> {user.name}  ( {user.age} years old )  </li>
                })}
            </ul>
        </Card>
    );
}

export default UsersList;