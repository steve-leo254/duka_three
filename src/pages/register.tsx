import { useState, ChangeEvent, FormEvent } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from '../components/IconifyIcon';
import axios from 'axios';
import url from '../config';

interface User {
  user_name: string;
  email: string;
  password: string;
  phone_no: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ user_name: '', email: '', password: '', phone_no: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formContent = {
      user_name: user.user_name,
      user_email: user.email,
      user_password: user.password,
      phone_no: user.phone_no,
    };
    try {
      const apiUrl = `${url}/register`;
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Done.', response.data);
      setAlertMessage('User successfully created!');
      setAlertOpen(true);
      setTimeout(() => setAlertOpen(false), 5000);
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Network error: ' + error.message);
      } else {
        setError('An unexpected error occurred');
      }
      console.error(error);
    }
  };

  return (
    <>
      <Typography align="center" variant="h3" fontWeight={600}>
        SignUp
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} mt={4} spacing={2} width={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<IconifyIcon icon="uim:google" />}
        >
          Signup with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<IconifyIcon icon="uim:apple" />}
        >
          Signup with Apple
        </Button>
      </Stack>
      <Divider sx={{ my: 3 }}>or Signup with</Divider>
      {alertOpen && <Alert severity="success">{alertMessage}</Alert>}
      <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>
        <TextField
          id="user_name"
          name="user_name"
          type="text"
          value={user.user_name}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Name"
          autoComplete="name"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          required
        />
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ opacity: user.password ? 1 : 0 }}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <IconifyIcon icon={showPassword ? 'ion:eye' : 'ion:eye-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="phone"
          name="phone_no"
          type="tel"
          value={user.phone_no}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Phone Number"
          autoComplete="tel"
          fullWidth
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" size="medium" fullWidth sx={{ mt: 1.5 }}>
          Submit
        </Button>
        <Typography
          my={3}
          color="text.secondary"
          variant="body2"
          align="center"
          letterSpacing={0.5}
        >
          Already have an account?{' '}
          <RouterLink to="/login" className="btn btn-primary w-100">
            Login
          </RouterLink>
        </Typography>
      </Stack>
    </>
  );
};

export default Signup;
