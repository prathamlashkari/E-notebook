import React from 'react';
import notesAppImage from '../resources/about.png';
import '../styling/About.css';
const About = () => {
  return (
    <div className="container " style={{ color: "white",height:'100%' }}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <h1 >Welcome to our Notes App!</h1>
            <p className='contentabout' >Our website helps you create and manage your notes easily.  Our Notes App is designed with simplicity and efficiency in mind. We believe that taking
            notes should be a frictionless experience. With our app, you can easily jot down your thoughts,
            ideas, to-do lists, and more, and access them wherever you go.</p>
            <div className="row mt-5">
              <div className="col ">
                <h3 className='stepshead'>How our app can assist you:</h3>
                <ol className='steps'>
                  <li>Create and organize notes effortlessly.</li>
                  <li>Access your notes from anywhere.</li>
                  <li>Edit and update your notes seamlessly.</li>
                  <li>... and much more!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={notesAppImage} alt="Notes App" className="img-fluid" />
        </div>
      </div>

    </div>
  );
};

export default About;
