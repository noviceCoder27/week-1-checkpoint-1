import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Appbar from "./components/Appbar.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {Landing} from "./components/Landing.jsx";
import { useEffect } from 'react';
import { BASE_URL } from "./config.js";
import axios from "axios";
import { useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { ProtectedRoutes } from './ProtectedRoutes';

function App() {
    const setUser = useSetRecoilState(userState)
    const init = async() => {
        const response = await axios.get(`${BASE_URL}/admin/me`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        if (response.data.username) {
            setUser({
                isLoading: false,
                userEmail: response.data.username
            })
        }
    };

    useEffect(() => {
       init();
    }, []);

    return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
                <Router>
                    <Appbar/>
                    <Routes>
                        <Route path={"/addcourse"} element={<ProtectedRoutes><AddCourse /></ProtectedRoutes>} />
                        <Route path={"/course/:courseId"} element={<ProtectedRoutes><Course /></ProtectedRoutes>} />
                        <Route path={"/courses"} element={<Courses/>} />
                        <Route path={"/signin"} element={<Signin />} />
                        <Route path={"/signup"} element={<Signup />} />
                        <Route path={"/"} element={<Landing />} />
                    </Routes>
                </Router>

        </div>
    );
}

export default App;