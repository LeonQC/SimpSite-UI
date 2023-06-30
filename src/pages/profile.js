import React, { useState } from 'react'
import { getcookie } from './api/validateUser'
import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'

const profile = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    getcookie(user)
    return (
        <div>
            <Navbar />
            <ProfileForm />
        </div>
    )
}

export default profile