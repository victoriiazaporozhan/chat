import { FC } from "react";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

interface Props {
  googleLoginHandler: () => void;
  appleLoginHandler: () => void;
}

export const LoginButtons: FC<Props> = ({ googleLoginHandler, appleLoginHandler}) => {
  return (
    <div className="login-buttons">
      <Button
        className="login-button"
        variant="outlined"
        size="large"
        startIcon={<GoogleIcon />}
        onClick={googleLoginHandler}
      >Continue with Google</Button>
      <Button
        className="login-button"
        variant="outlined"
        size="large"
        startIcon={<AppleIcon />}
        onClick={appleLoginHandler}
      >Continue with Apple</Button>
    </div>
  )
}