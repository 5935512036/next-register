import styled from "styled-components"
import { useState } from 'react';

const StyledWrapper = styled.div`

border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 300px ;
margin : 30px;
padding : 10px ;
h1{
    display: flex
    justify-content: center;

}



`


const Button = styled.button`
  border-radius: 8px;
  border: 2px solid #00ff11;
  height: 45px;
  width: 150px;
  margin : 13px;
  font-size: 18px;
  color: #fff;
  background-color : #00ff11;
  cursor: pointer;
  &:hover{
      color: #00ff11;
      background-color: #fff;
      
  }
`

const Login = props => {


    const [firsname, setfirsname] = useState('');
    const [pass, setpass] = useState('');


    const logins = () =>{

        props.logins({firsname,pass}) ;
    }

    return (
        <StyledWrapper>

            <h1>log in</h1>
            <p>Username</p>
            <input type="text" onChange={(e) => setfirsname(e.target.value)}></input>
            <p>Password</p>
            <input type="password" onChange={(e) => setpass(e.target.value)}></input>

            <p><Button onClick = {logins} >login</Button></p>


        </StyledWrapper>







    )

}


export default Login;