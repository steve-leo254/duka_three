// import React, { useState } from 'react';
// import '../register.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// interface FormState {
//     user_name: string;
//     user_password: string;
//     user_email: string;
//     user_contact: string;
// }
// interface Authtype {
//     user_name: string,
//     user_password: string
// }

// const Register: React.FC = () => {
//     // register
//     const navigate = useNavigate()

//     const [form, setForm] = useState<FormState>({
//         user_name: '',
//         user_password: '',
//         user_email: '',
//         user_contact: ''
//     })


//     const handleRegister = async () => {
//         let formcontent = {
//             user_name: form.user_name,
//             user_password: form.user_password,
//             user_email: form.user_email,
//             user_contact: form.user_contact
//         }
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/register', formcontent);
//             console.log('Registration successful:', response.data);
//             navigate('/login')


//         } catch (error) {
//             console.error('Input correct format:', error);
//         }
//     };
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setForm(prevForm => ({
//             ...prevForm,
//             [name]: value
//         }));


//     }
//     // login
    
//     const [loginform,setLoginForm]=useState<Authtype>({
//         user_name:'',
//         user_password:''
//     })
//     type ResponseData = {
//         access_token: string,
//         token_type: string
//     }
    
//     const handleLogin = async (e: any) => {
//         e.preventDefault();
//         let formContent: Authtype = {
//             user_name: loginform.user_name,
//             user_password: loginform.user_password
//         };
//         try {

//             const apiUrl = 'http://127.0.0.1:8000/login';
//             const response = await axios.post(apiUrl,formContent , {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 }
//             });

//             console.log('response', response.data)

//             const responseData: ResponseData = {
//                 ...response.data
//             }
//             // setIsLoggedIn(true);
//             console.log("responseData.......", responseData)

//             localStorage.setItem("token", responseData.access_token)
//             let mytoken =localStorage.getItem("token")
//             console.log(mytoken)
//             navigate("/dashboard")
//         } catch (error) {
//             console.log('error.......', error)
//         }
//     }
    
//     const [isSignUp, setIsSignUp] = useState<boolean>(false);

//     const toggleMode = () => {
//         setIsSignUp(!isSignUp);
//     };

//     return (
//         <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     {isSignUp ? (
//                         <form  className="sign-up-form" onSubmit={handleRegister}>
//                             <h2 className="title">Sign up</h2>
//                             <div className="input-field">
//                                 <i className="fas fa-user"></i>
//                                 <input type="text" placeholder="Username" name='user_name' value={form.user_name}
//                                 onChange={handleChange} />
//                             </div>
//                             <div className="input-field">
//                                 <i className="fas fa-envelope"></i>
//                                 <input type="email" placeholder="Email"
//                                 name='user_email' value={form.user_email} onChange={handleChange} />
//                             </div>
//                             <div className="input-field">
//                                 <i className="fas fa-phone"></i>
//                                 <input type="text" placeholder="Phone Number"
//                                 name='user_contact' value={form.user_contact} onChange={handleChange} />
//                             </div>
//                             <div className="input-field">
//                                 <i className="fas fa-lock"></i>
//                                 <input type="password" placeholder="Password" 
//                                 name='user_password' value={form.user_password} onChange={handleChange}/>
//                             </div>
//                             <input type="submit" className="btn" value="Sign up" />
//                             <p className="social-text">Or Sign up with social platforms</p>
//                             <div className="social-media">
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-facebook-f"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-twitter"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-google"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-linkedin-in"></i>
//                                 </a>
//                             </div>
//                         </form>

//                     ) : (
//                         <form onSubmit={handleLogin} className="sign-in-form">
//                             <h2 className="title">Sign in</h2>
//                             <div className="input-field">
//                                 <i className="fas fa-user"></i>
//                                 <input type="text" placeholder="Username" 
//                                 value={loginform.user_name} onChange={(e) => setLoginForm({ ...loginform, user_name: e.target.value })}/>
//                             </div>
//                             <div className="input-field">
//                                 <i className="fas fa-lock"></i>
//                                 <input type="password" placeholder="Password" 
//                                 value={loginform.user_password} onChange={(e) => setLoginForm({ ...loginform, user_password: e.target.value })}/>
//                             </div>
//                             <input type="submit" value="Login" className="btn solid" />
//                             <p className="social-text">Or Sign in with social platforms</p>
//                             <div className="social-media">
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-facebook-f"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-twitter"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-google"></i>
//                                 </a>
//                                 <a href="#" className="social-icon">
//                                     <i className="fab fa-linkedin-in"></i>
//                                 </a>
//                             </div>
//                         </form>
//                     )}
//                 </div>
//             </div>

//             <div className="panels-container">
//                 <div className="panel left-panel">
//                     <div className="content">
//                         <h3>New here ?</h3>
//                         <p>
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//                             ex ratione. Aliquid!
//                         </p>
//                         <button className="btn transparent" onClick={toggleMode}>
//                             Sign up
//                         </button>
//                     </div>
//                     <img src="/images/log.svg" className="image" alt="" />
//                 </div>
//                 <div className="panel right-panel">
//                     <div className="content">
//                         <h3>One of us ?</h3>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//                             laboriosam ad deleniti.
//                         </p>
//                         <button className="btn transparent" onClick={toggleMode}>
//                             Sign in
//                         </button>
//                     </div>
//                     <img src="/images/register.svg" className="image" alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;