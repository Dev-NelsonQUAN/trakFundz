import React from 'react';
import './TeamPage.css';
import Oriade from '../../assets/Oriade.svg'; 
import Newness from '../../assets/Newness.svg';
import Emeka from '../../assets/Emeka.svg';
import Shola from '../../assets/Shola.svg';

// Sample team data
const teamMembers = [
  { id: 1, name: 'Adeola Oriade Olaitan', stack: 'Product Designer', image: Oriade },
  { id: 2, name: 'Emeka Chigbata', stack: 'Back End Developer', image:  Emeka},
  { id: 3, name: 'Ogedengbe Oluwashola', stack: 'Back End Developer', image: Shola },
  { id: 4, name: 'Quadri Adegbenga Nelson', stack: 'Front End Developer', image: Oriade },
  { id: 5, name: 'Ibrahim Memunat Bolanle', stack: 'Front End Developer', image: Newness },
  { id: 6, name: 'Abari Abayomi', stack: 'Front End Developer', image: Oriade }
];

const TeamPage = () => {
  return (
    <>
    <div className="teamContainer">
        <h1>Meet the team</h1>
      {teamMembers.map(member => (
        <div key={member.id} className="teamBox">
          <img src={member.image} alt={member.name} className="teamImage" />
          <h3 className="teamName">{member.name}</h3>
          <p className="teamStack">{member.stack}</p>
        </div>
      ))}
    </div>
    <div className='teamText'>
    <div className='teamWords'>
        <p>We’re excited about the future and committed to continuously improving Trakfundz to better serve our users. Your feedback 
and support are invaluable as we strive to make financial management easier and more effective for everyone.

Thank you for choosing Trakfundz. Together, we can achieve financial clarity and success.</p>
       <span className='Dteam'>The Trakfundz Team</span>
    </div>
  </div>
  </>
  );
};

export default TeamPage;
