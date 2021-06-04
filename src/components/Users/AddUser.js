import { Fragment, useState , useRef} from "react"
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModule from "../UI/ErrorModule";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

   /*  const [enteredUsername, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState(0); */


    let userNameRef = useRef();
    let useAgeRef = useRef();


    const [error, setError] =useState()

    const AddUserHandler = (event) => {

        event.preventDefault();

        const enteredUsername     =  userNameRef.current.value;
        const enteredAge          =  useAgeRef.current.value;
        
        if(enteredUsername.trim().length === 0 ) {
            setError({
                title: "Username doesn't exist",
                message:"Please Enter any username"
            })
            return;
        }else if(+enteredAge<1){
         /* here +  converts string to number */
                setError({
                    title: "Invalid Age",
                    message:"Age should be greater than or equal to 1"
                })
            return;

        }

        
       

        console.log(enteredUsername, typeof enteredAge);
        let newUser= {
            name: enteredUsername,
            age :  enteredAge,
            id: Date.now()
        }
        props.onAddUser(newUser)

      /*   setEnteredUserName("");
        setEnteredAge(0); */

        userNameRef.current.value='';
        useAgeRef.current.value='';
    }

  /*   const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
 */

    const errorHandler=()=>{
        setError();
    }

    return (
        <Fragment>
            { error &&  <ErrorModule  onConfirm={errorHandler}  title={error.title}   message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler} >
                    <label htmlFor="username" > Username  </label>

                    <input
                    ref={userNameRef}  
                  /*   value={enteredUsername}
                    onChange={usernameChangeHandler}  */
                    type="text" id="username" />

                    <label htmlFor="age" > Age  </label>

                    <input type="number" 
                    ref={useAgeRef}
                 /*    value={enteredAge}
                    onChange={ageChangeHandler}  */
                     id="age" />

                    <Button type="submit"> Add User </Button>
                </form>
            </Card>


        </Fragment>
    )
}


export default AddUser;