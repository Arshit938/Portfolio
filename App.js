
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavBar } from './components/Navbar';


function App() {
  return (
    <div className="App" id="startingpoint">
      <NavBar />

      {/* INTRODUCTORY SECTION */}

      <div id='upperContainer'>
        <img id='photo' src={require(".//photo.jpeg")}></img>
        <button className="ui-btn" style={{ marginTop: -370 }}>
          <span style={{ fontSize: 50 }}>
            Hi!
          </span>
        </button>
        <button className='ui-btn' id="name">
          <h3>
            <span style={{ display: 'inline-block' }}>
              <b>I Am Arshit</b>
            </span>
          </h3>
        </button>

      </div>
      <div id='content'>
        <p>
          <i style={{ marginLeft: -190 }}>I am a software developer.I build various kinds of applications and website </i><br /><i style={{ marginLeft: -170 }}>contact me if you want to build awesome softwares which are fast and efficient</i><br /><i style={{ marginLeft: -460 }}>the link of my CV is below click to download
          </i>
        </p>
      </div>
      <a href='https://drive.google.com/file/d/1mX2QfVD8nAMJn_4-eSC6xzRbz89ldxG_/view?usp=share_link'>
        <div class="button " data-tooltip="Size : 44.1 KB " id='cv'>
          <div class="button-wrapper">
            <div class="text">Download CV</div>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
            </span>
          </div>
        </div>
      </a>

      {/* SOCIAL SECTION */}

      <div id="socials">
        <button class="cta">
          <span id='ps' class="hover-underline-animation"> Connect with me </span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
        <div class="share">
          <a href='https://instagram.com/007_arshit?igshid=ZGUzMzM3NWJiOQ=='>
            <button class="btn1">
              <svg className='instagram' xmlns="http://www.w3.org/2000/svg" viewBox="1 -3 58 58" width="70px" height="70px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" /></svg>
            </button>
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgCbNjsHldMKMgrnxZPgrnkgvwbFmHmCnLDbgnMpnmTtldMCbxTqPcHJBdLvSKLVXxPg'>
            <button class="btn2">
              <img src={require(".//gmail.png")} height="30px" width="30px" viewBox="0 0 48 48"></img>
            </button>
          </a>
          <a href='https://github.com/Arshit938'>
            <button class="btn3">
              <svg className="git" xmlns="http://www.w3.org/2000/svg" viewBox="1 -3 58 58" width="70px" height="70px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
            </button>
          </a>
        </div>
      </div>

      {/* SKILL SECTION */}

      <button id='sh' class="skill" href="#">SKILLS</button>
      <div id="carouselExample" class="carousel slide">
        <div id='slides'>
          <div class="carousel-inner" id='ci' >
            <div class="carousel-item active" id="ca" >
              <div class="crd">
                <div class="crd__content">
                  <p><b>WEB DEVELOPMENT</b></p>
                  <div class="progress-bar" id="pb1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
              </div>
              <div class="crd">
                <div class="crd__content">
                  <p><b>DEEP LEARNING</b></p>
                  <div class="progress-bar" id="pb2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
              </div>
              <div class="crd">
                <div class="crd__content">
                  <p><b>MACHINE LEARNING</b></p>
                  <div class="progress-bar" id="pb3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" >
            <div class="crd">
              <div class="crd__content">
                <p><b>ARTIFICIAL INTELLIGENCE</b></p>
                <div class="progress-bar" id="pb4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>DJANGO</b></p>
                <div class="progress-bar" id="pb5" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">97%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>REACT.JS</b></p>
                <div class="progress-bar" id="pb6" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
            </div>
          </div>
          <div class="carousel-item" >
            <div class="crd">
              <div class="crd__content">
                <p><b>KIVY</b></p>
                <div class="progress-bar" id="pb7" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>FRONT END DEVELOPMENT</b></p>
                <div class="progress-bar" id="pb8" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>BACKEND DEVELOPMENT</b></p>
                <div class="progress-bar" id="pb9" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
            </div>
          </div>
          <div class="carousel-item" >
            <div class="crd">
              <div class="crd__content">
                <p><b>PYTHON</b></p>
                <div class="progress-bar" id="pb10" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">97%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>REACT NATIVE</b></p>
                <div class="progress-bar" id="pb11" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>C++</b></p>
                <div class="progress-bar" id="pb12" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
            </div>
          </div>
          <div class="carousel-item" >
            <div class="crd">
              <div class="crd__content">
                <p><b>JAVA SCRIPT</b></p>
                <div class="progress-bar" id="pb13" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>PYTHON SCRIPT</b></p>
                <div class="progress-bar" id="pb14" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
            </div>
            <div class="crd">
              <div class="crd__content">
                <p><b>JAVA</b></p>
                <div class="progress-bar" id="pb15" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">78%</div>
              </div>
            </div>
          </div>

          <button id='indi' class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id='indi' class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* PROJECT SECTION */}

      <div id='pro'>
        <button class="skill" href="#">Projects</button>
      </div>
      <div id='project_list'>
        <div id='project_list_rows'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Your Mini Mart</p>
                <p>It is an ecommerce website designed to sell all kinds of goods and services.In future it can be used for drop shipping<br /><br /><br />hover to know more</p>
              </div>
              <div class="flip-card-back">
                <p class="title" id='back_title'>Technology used</p>
                <p id='back_content'>
                  <ul>
                    <li>Django : It is used in its backend to link website to its database manage security and url requests and various tasks related to backend </li><br />
                    <li >HTML: It is the bonestructure of any websites frontend</li>
                    <br />
                    <li>CSS: It is used in its various animations , for styling and responsible for its responsiveness</li>
                    <br />
                    <li>javaScript: It is used to make navbar responsive and its events are used at various points</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Voice Assistant (COCO)</p>
                <p>It is a voice assistant which helps you automate your day to day tasks by running in the background It is made using advanced python and pythons various AI libraries <br /> <br />hover to know more</p>
              </div>
              <div class="flip-card-back">
                <p class="title" id='back_title' style={{ marginTop: -40 }}>Tasks Perfomed</p>
                <p id='back_content'>
                  <ul>
                    <li>Send mails: It can send mail automatcaly to the wished email address.</li>
                    <li >Send whatsapp messages: It will send whatsapp message to the desired contact number from your contacts</li>
                    <li>Performs Google search: It will perform google searches for you while you do your other works</li>
                    <li>Plays movies and songs:plays your desired movie or song while you sit back and relax</li>
                    <li>Tells you news:IT tells you latest news headlines so you can keep up with current affairs while working on diffrent task</li>
                    <li>Does everything an assistant does: It keep tracks of your schedule and appointments it also sets reminders for you and tells you about weather  </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='project_list_rows'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Land Price Predictor</p>
                <p>It is a machine learning model which is used to predict land price when given specific details <br /><br /><br /><br /> hover to know more</p>
              </div>
              <div class="flip-card-back">
                {/* <p class="title" id='back_title'>Technology used</p> */}
                <p id='back_content'>
                  It is used to predict the land price of a given land when specific information about it are given it is a regressor which fits a best fit line on given data and then predicts the price the predictions are not precisely accurate but near to accurate so that person can get the idea of various land
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Sporty Hub</p>
                <p>It is an ecommerce website designed to sell only sports items as goods and services.In future it can be used for drop shipping for sports equipments<br /><br /><br />hover to know more</p>
              </div>
              <div class="flip-card-back">
                <p class="title" id='back_title'>Technology used</p>
                <p id='back_content'>
                  <ul>
                    <li>Django : It is used in its backend to link website to its database manage security and url requests and various tasks related to backend </li><br />
                    <li >HTML: It is the bonestructure of any websites frontend</li>
                    <br />
                    <li>CSS: It is used in its various animations , for styling and responsible for its responsiveness</li>
                    <br />
                    <li>javaScript: It is used to make navbar responsive and its events are used at various points</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='project_list_rows'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Digit recognition system</p>
                <p> It is a deep learning model made to classify handwritten digits <br /><br /><br /><br /><br />hover to know more
                </p>
              </div>
              <div class="flip-card-back">
                <p class="title" id='back_title'>Technology used</p>
                <p id='back_content'>
                  It is a deep learning model which is used to predict which digit is in the image it is made with the help of neural networks which makes it way more efficient
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Medical Bot</p>
                <p>It is a chatbot which classifies which disease you are suffering from by checking your symptoms If the disease is minor it will tell you what medicines you can take<br /><br /><br /><br /> hover to know more </p>
              </div>
              <div class="flip-card-back">
                <p class="title" id='back_title'>Technology used</p>
                <p id='back_content'>
                  <ul>
                    <li>Django : It is used in its backend to link website to its database manage security and url requests and various tasks related to backend </li><br />
                    <li >HTML: It is the bonestructure of any websites frontend</li>
                    <br />
                    <li>CSS: It is used in its various animations , for styling and responsible for its responsiveness</li>
                    <br />
                    <li>javaScript: It is used to make navbar responsive and its events are used at various points</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <a href="#startingpoint">
      <button class="cta" style={{marginTop:30}}>
          <span id='ps' class="hover-underline-animation"> Get back to home </span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
      </a>


    </div>
  );
}

export default App;
