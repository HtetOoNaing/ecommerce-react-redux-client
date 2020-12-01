import React, { useState } from 'react';
import Button from '../components/buttons/button.component';
import Container from '../components/container/container.component';
import Input from '../components/inputs/input.component';
import { connect } from 'react-redux';
import { login } from '../data/reducers/auth';
import './loading.css';
import { Redirect } from 'react-router-dom';

const Login = ({login, isAuth, isLoading, user}) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = data;
    const handleChange = (name) => event => {
        setData({...data, [name]: event.target.value});
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        if ( !email || !password) {
            console.log('Please fill all field');
        } else {
            console.log('ok');
            login({email, password})
        }
    }
    if(isAuth && user) {
        const {name, role} = user;
        if (role === 0) return <Redirect to="/dashboard/user" />
        if (role === 1) return <Redirect to="/dashboard/admin" />
    }
    return ( 
        <Container>
            <form onSubmit={onSubmit} className="bg-white flex flex-col rounded-lg overflow-hidden shadow-2xl p-5 my-16 md:w-1/2 lg:w-1/3 mx-auto ">
                <h2 className="font-bold text-3xl text-center mb-5 " >Login</h2>
                <Input type="email" title="Email" placeholder="mgmg@gmail.com" value={email} handleChange={handleChange('email')} />
                <Input type="password" title="Password" placeholder="******" value={password} handleChange={handleChange('password')} />
                {isLoading ? <div id="loading" className="self-center mb-3"></div> : <Button type="submit" title="Login" moreStyle="bg-primary text-white w-full mb-3" /> }
                <div className="flex justify-end w-full">
                    <Button isButton={false} title="create a new account ?" href="/register" moreStyle="text-gray-600" />
                </div>
            </form>
        </Container>
     );
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated,
    isLoading: state.auth.loading,
    user : state.auth.user
})

export default connect(mapStateToProps, {login})(Login);