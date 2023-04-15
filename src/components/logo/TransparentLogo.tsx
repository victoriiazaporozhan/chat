import { FC } from "react";
import logo from '@/images/transparent-logo.png';

export const TransparentLogo: FC = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo' className='logo' />
      <p className='slogan'>STAY CONNECTED</p>
    </div>
  )
}