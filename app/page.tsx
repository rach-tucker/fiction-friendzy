import Prompt from './prompt/route';
import SignUp from '../lib/signup';
import './page.module.css';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);


export default function MixMatchPage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='prompt'>
        <Prompt/>
      </div> 
      <div className='signup'>
        <SignUp/>
      </div>
  </div>
  )
}

