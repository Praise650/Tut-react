// import logo from './logo.svg';
import MyButton from './components/button';
import GeneralInputField from './components/general_input_field';
import glass from './csss/transparent-glass.module.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
        <HomePage />
    </div>
  );
}

function HomePage(){
  return (
    <div className={glass.wrapper}>
      <div className='home-container'>
      {/* <div class="item"><SplashImage/></div> */}
      <div className='login_form'>
      <GeneralInputField placeholder="First Name" type='text'/>
      <GeneralInputField placeholder="Last Name" type='text'/>
      <GeneralInputField placeholder="Email" type='email'/>
      <GeneralInputField placeholder="Gender" type='text'/>
      <GeneralInputField placeholder="Home Address" type='text'/>
      <MyButton />
      </div>
        </div>
      </div>
  );
}

// function SplashImage(){
//   return (
//     <div className="SplashImage">
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>
//   );
// }


export default App;
