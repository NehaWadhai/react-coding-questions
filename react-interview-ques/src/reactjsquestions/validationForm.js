import React,{useState} from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const initialState = {
    firstName: {value:'', isValid: ''},
    lastName:{value:'' , isValid: ''},
    email :{value: '' , isValid: ''},
    password :{value: '' , isValid: ''},
    confirmPassword : {value:'' , isValid: ''},
    };
  const [formValues,setFormValues] = useState(initialState)
  const isValidFormat = (valid,name) =>{
   setFormValues((prevState)=>({
      ...prevState,
      [name] : {
        ...prevState[name],
        isValid: valid
      }
    }))
    return
  }
  const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  const onClickSignUp = () =>{
for (const key in formValues){
  const value = formValues[key].value
switch(key){
      case 'firstName':{
          isValidFormat(value.length > 0 ? '' : 'First name cannot be empty' , key)
          break;
      }
        case 'lastName':{
          isValidFormat(value.length >0  ? '' : 'Last name cannot be empty', key)
          break;
      }
        case 'email':{
          isValidFormat(pattern.test(value) ? '' : 'Invalid email address' , key)
          break;
      }
        case 'password':{
          isValidFormat(value.length > 8 ? '' : 'Password must be greater than 7 characters' , key)
            break;
      }
        case 'confirmPassword':{
        
          isValidFormat(value !== formValues.password.value || value == '' && formValues.password.value == ''    ? 'Passwords do not match' : '', key)
            break;
      }
      default:
      return null
       
         
    }
}
    

  }


  const onChangeFields = (e) =>{
    const{value,name} = e.target
   
     setFormValues((prevState) =>
    ({
      ...prevState,
     [name] : {
       ...prevState[name],
       value:value
     }
    }))
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onClickSignUp();
   const result =  Object.values(formValues).every((feild) => feild.isValid === '')
    console.log("Form submitted successfully1",result);

   if(result){
    console.log("Form submitted successfully");
   }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) =>onChangeFields(e)}
        />
      <p data-testid="first-name-error-id" className="error">{formValues.firstName.isValid}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChangeFields}
        />
        <p data-testid="last-name-error-id" className="error">{formValues.lastName.isValid}</p>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={onChangeFields}
        />
        <p data-testid="email-error-id" className="error">{formValues.email.isValid}</p>
        <input
          data-testid="password-id"
          type="password"
          name="password"
          placeholder="Password"
           onChange={onChangeFields}
        />
        <p data-testid="password-error-id" className="error">{formValues.password.isValid}</p>
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
           onChange={onChangeFields}
        />
        <p data-testid="confirm-password-error-id" className="error">{formValues.confirmPassword.isValid}</p>
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: sans-serif;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;