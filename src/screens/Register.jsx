import React, { useState } from 'react';
import Button from '../components/buttons/button.component';
import Container from '../components/container/container.component';
import Input from '../components/inputs/input.component';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { name, email, password, confirmPassword } = data;
    const handleChange = (name) => event => {
        setData({...data, [name]: event.target.value});
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            console.log('Passwords do not match');
        } else if (!name || !email || !password) {
            console.log('Please fill all field');
        } else {
            console.log('ok');
        }
    }
    return ( 
        <Container>
            <form onSubmit={onSubmit} className="bg-white rounded-lg overflow-hidden shadow-2xl p-5 my-16 ">
                <h2 className="font-bold text-3xl text-center mb-5 " >Register</h2>
                <Input type="text" title="Name" placeholder="Mg Mg" value={name} handleChange={handleChange('name')} />
                <Input type="email" title="Email" placeholder="mgmg@gmail.com" value={email} handleChange={handleChange('email')} />
                <Input type="password" title="Password" placeholder="******" value={password} handleChange={handleChange('password')} />
                <Input type="password" title="Confirm Password" placeholder="******" value={confirmPassword} handleChange={handleChange('confirmPassword')} />
                <Button type="submit" title="SignUp" moreStyle="bg-primary text-white w-full mb-3" />
            </form>
        </Container>
     );
}
 
export default Register;