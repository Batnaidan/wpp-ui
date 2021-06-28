import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    width: '100%',
    margin: '10px 0',
  },
  firstName: {
    marginLeft: '0',
  },
  lastName: {
    marginRight: '0',
  },
  password: {
    margin: '5px 0',
  },
}));

export default function EmailSignIn({ userInput, handleChange, changeInput }) {
  const handleLoginClick = () => {
    console.log(userInput);
  };

  const classes = useStyles();

  const handleClickShowPassword = () => {
    changeInput({ ...userInput, showPassword: !userInput.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-container">
      <TextField
        defaultValue={userInput.email}
        label="Email"
        variant="outlined"
        disabled
        onChange={handleChange('first_name')}
        className={classes.margin}
      />
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={userInput.showPassword ? 'text' : 'password'}
          value={userInput.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {userInput.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className="login-button"
        style={{ fontSize: '1em', backgroundColor: '#e76f51' }}
        onClick={handleLoginClick}
      >
        LOGIN
      </Button>
    </div>
  );
}
