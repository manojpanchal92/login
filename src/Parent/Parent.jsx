import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import App from '../App';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from '../Context/Usercontext';
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';




const Parent = () => {

    const { loggedIn } = useContext(UserContext);
    console.log(loggedIn)


    return (
        <div>
            <BrowserRouter>
                <Navbar />
               
                {loggedIn ? 
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes> :
                    <Routes>
                        <Route path='*' element={<Login />} />
                    </Routes>
                    }
            </BrowserRouter>
        </div>
    )
}

export default Parent;

