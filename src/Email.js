import './Email.scss';
import { Button, TextField } from './Components';

function Email() {
  return (
    <div className='email'>
      <h2 className='heading'>Subscribe to the studio email</h2>
      <p className='subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div>
        {TextField('First name')}
        {TextField('Email')}
        {Button('submit')}
      </div>
    </div>
  );
}

export default Email;