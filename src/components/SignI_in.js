import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Modal, Form } from 'react-bootstrap';
import '../css/login.css'
import ForgetPaswword from '../components/forgetPassword'
import videoBg from '../images/video11.mp4'
import { connectUserLogin, connectDemoUserShow, connectDemoDoctorShow } from '../Api/ConnectOrAddFromApi'

import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';


//here component Sign in use in component Menu
function Sign_in(props) {


    // show pop up
    const [showForgetPassword, setShowForgetPassword] = useState(false);
    const handleShowForgetPassword = () => setShowForgetPassword(true);


    const [Login, setLogin] = useState('')
    const [Password, setPassword] = useState('')

    let storedTheme = localStorage.getItem("theme");



    // show pop up alert swal when we connect to login = use in loginUser
    const openSwalWhenLogin = async (nameUser, UserType_code) => {


        //user popup swal
        if (storedTheme === "light" && UserType_code == 1) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'You can now use a variety of actions on our site.',
                toast: true,
                position: 'top-end',
                background: '#373E44',
                color: '#ffffffab',
                showConfirmButton: false,
                timer: 1500
            })
            await window.location.reload(false);
        }

        if (storedTheme === "dark" && UserType_code == 1) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'You can now use a variety of actions on our site.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500
            })
            await window.location.reload(false);
        }


        //doctor popup swal
        if (storedTheme === "light" && UserType_code == 2) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'Let`s work :)',
                toast: true,
                position: 'top-end',
                background: '#373E44',
                color: '#ffffffab',
                showConfirmButton: false,
                timer: 1500
            })
            await window.location.reload(false);
        }

        if (storedTheme === "dark" && UserType_code == 2) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'Let`s work :)',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
            })
            await window.location.reload(false);
        }


        //Admin popup swal
        if (storedTheme === "light" && UserType_code == 3) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'Let`s Control This Web Side',
                toast: true,
                position: 'top-end',
                background: '#373E44',
                color: '#ffffffab',
                showConfirmButton: false,
                timer: 1500
            })
            await window.location.reload(false);
        }

        if (storedTheme === "dark" && UserType_code == 3) {

            await Swal.fire({
                title: `Hello ${nameUser}`,
                icon: 'success',
                html: 'Let`s Control This Web Side',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
            })
            await window.location.reload(false);
        }
    }




    // check if input value when sign in user , if not input show alert message
    const CheckValue = () => {

        if (Login == '' || Password == '') {

            Swal.fire({
                icon: 'warning',
                text: 'input please value !',
                toast: true,
                position: 'top-end',
                confirmButtonColor: "green"
            })
        }

        else {
            loginUser()
        }
    }




    // login check if have data base , if have we save in sessionStorage
    const loginUser = async () => {

        let user =
        {
            User_Login: Login,
            User_password: Password
        }

        await connectUserLogin(user);

        let userData = JSON.parse(sessionStorage.getItem("user"));

        if (userData != null) {

            openSwalWhenLogin(userData.FirstName, userData.UserType_code);
        }

        else {
            return;
        }
    }




    //show pup up if we chiose forget password
    const showPopForgetPaswword = () => {

        handleShowForgetPassword();
    }




    //here we connect demo user , for other users how went see can use demo user , instead of Register Or Login
    const connectDemoUser = async () => {

        await connectDemoUserShow();

        let userData = JSON.parse(sessionStorage.getItem("user"));
        openSwalWhenLogin(userData.FirstName, userData.UserType_code);
    }




    //connect demo doctor
    const connectDemoDoctor = async () => {

        await connectDemoDoctorShow();

        let userData = JSON.parse(sessionStorage.getItem("user"));
        openSwalWhenLogin(userData.FirstName, userData.UserType_code);
    }




    // show video info about Admin what he can to do in this website
    const AdminInfo = () => {

        Swal.fire({
            html: `<div class="styleVideoAdmin"><video controls autoplay loop muted playsinline src=${videoBg}></video></div>`,
            confirmButtonText: 'Wow',
            background: 'rgba(0, 0, 0, 0.801)',
            confirmButtonColor: '#2d79b5'
        })
    }





    if (storedTheme === "light") {

        return (

            <div >

                <div className="modelLogin">
                    <div className="form-boxDark">
                        <div className="header-form">

                            <Button style={{ background: "#424242" }} variant="contained" onClick={props.hideSignIn} >
                                <CloseIcon style={{ fontSize: "20px", color: "white" }} />
                            </Button>

                            <h4 className="text-primary text-center">
                                <img
                                    className="d-block w-100"
                                    src={require("../images/qqq.gif")}
                                />
                            </h4>
                            <div className="image">
                            </div>
                        </div>
                        <div className="body-form">

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Login"
                                        value={Login}
                                        onChange={(event) => setLogin(event.target.value)} />
                                </div>



                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={Password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>


                                <div className='loginInOrCloseButtom'>
                                    {/* <button type="button" onClick={CheckValue} className="btn btn-warning">Login</button>
                                    <button type="button" onClick={props.hideSignIn} className="btn btn-secondary">Close</button> */}
                                    <Button variant="contained" onClick={CheckValue} startIcon={<LoginIcon />}>
                                        Login
                                    </Button>
                                </div>

                                <div className="messageDark">
                                    <p onClick={showPopForgetPaswword}>Forgot your password</p>
                                </div>

                                <div className='borderSpaceDark'></div>

                                <div className='DemoUserAndDoctorDark'>

                                    <p>Connect Demo
                                        <a onClick={connectDemoUser}> User</a> or
                                        <a onClick={connectDemoDoctor}> Doctor</a>
                                    </p>

                                </div>


                                <div className='infoVideoAAdminDark'>
                                    <a onClick={AdminInfo}>Click See What Admin can to do !</a>
                                </div>


                                {/* show pop up forget password */}
                                <Modal show={showForgetPassword} style={{ background: "rgba(0, 0, 0, 0.80)" }}>
                                    <Modal.Header className='titleHeater'>
                                        <Modal.Title><h1>You forget a Password ? Let's create new :)</h1></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <Form>
                                            <ForgetPaswword />
                                        </Form>

                                    </Modal.Body>
                                </Modal>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }



    else {

        return (

            <div >

                <div className="modelLogin">
                    <div className="form-box">
                        <div className="header-form">

                            <Button style={{ background: "white" }} variant="contained" onClick={props.hideSignIn} >
                                <CloseIcon style={{ fontSize: "20px", color: "black" }} />
                            </Button>

                            <h4 className="text-primary text-center">
                                <img className="d-block w-100" src={require("../images/qqq.gif")} />
                            </h4>
                            <div className="image"></div>
                        </div>
                        <div className="body-form">

                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Login"
                                        value={Login}
                                        onChange={(event) => setLogin(event.target.value)} />
                                </div>


                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={Password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>

                                <div className='loginInOrCloseButtom'>
                                    {/* <button type="button" onClick={CheckValue} className="btn btn-success">Login</button> */}
                                    <Button variant="contained" onClick={CheckValue} startIcon={<LoginIcon />}>
                                        Login
                                    </Button>

                                </div>

                                <div className="message">
                                    <p onClick={showPopForgetPaswword}>Forgot your password</p>
                                </div>

                                <div className='borderSpace' ></div>


                                <div className='DemoUserAndDoctor'>

                                    <p>Connect Demo
                                        <a onClick={connectDemoUser}> User</a> or
                                        <a onClick={connectDemoDoctor}> Doctor</a>
                                    </p>

                                </div>


                                <div className='infoVideoAAdmin'>
                                    <a onClick={AdminInfo}>Click See What Admin can to do !</a>
                                </div>


                                {/* show pop up forget password */}
                                <Modal show={showForgetPassword} style={{ background: "rgba(0, 0, 0, 0.80)" }}>
                                    <Modal.Header className='titleHeater'>
                                        <Modal.Title><h1>You forget a Password ? Let's create new :)</h1></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <Form>
                                            <ForgetPaswword />
                                        </Form>

                                    </Modal.Body>
                                </Modal>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Sign_in;