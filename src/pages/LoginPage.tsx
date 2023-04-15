import { FC } from 'react';
import { TransparentLogo } from '../components/logo/TransparentLogo';
import { LoginButtons } from '../components/LoginButtons';

export const LoginPage: FC = () => {
  // eslint-disable-next-line no-console
  const mockedHandler = (param: string) => { console.log(`logged with ${param}`)};
  return (
    <div className='page-container'>
      <div className='login-page'>
        <TransparentLogo />
        <LoginButtons
          googleLoginHandler={() => mockedHandler('Google')}
          appleLoginHandler={() => mockedHandler('Apple')} />
      </div>
    </div>
  )
}