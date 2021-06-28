import { useState } from 'react';
import clsx from 'clsx';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  input: {
    padding: '5px 10px 5px 10px',
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 'calc(100% / 3 - 10px)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% / 2 - 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  personalInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  registerInput: {
    marginLeft: '0%',
    width: '46%',
  },
  letterInput: {
    margin: '0 1%',
    width: '25%',
  },
  letters: {
    padding: '2px 12px',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  userType: {
    // height: '40px',
  },
}));

export default function HirerForm() {
  const cyrillicAlphabet = [
    'А',
    'Б',
    'В',
    'Г',
    'Д',
    'Е',
    'Ё',
    'Ж',
    'З',
    'И',
    'Й',
    'К',
    'Л',
    'М',
    'Н',
    'О',
    'Ө',
    'П',
    'Р',
    'С',
    'Т',
    'У',
    'Ү',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Ш',
    'Щ',
    'Ъ',
    'Ы',
    'Ь',
    'Э',
    'Ю',
    'Я',
  ];
  const [registerNo, changeRegisterNo] = useState({
    firstLetter: 'А',
    secondLetter: 'А',
    numbers: '',
  });
  const handleRegisterNo = (prop) => (event) => {
    changeRegisterNo({ ...registerNo, [prop]: event.target.value });
  };
  const classes = useStyles();
  const [formInput, changeFormInput] = useState({
    userType: '',
    lastName: '',
    firstName: '',
    registerNo: '',
    phone: '',
    emergencyPhone: '',
    email: '',
    office: '',
    subOffice: '',
    bagHoroo: '',
    horoolol: '',
    hothon: '',
    bair: '',
    orts: '',
    toot: '',
    didAgreedTOS: false,
  });
  const handleFormChange = (prop) => (event) => {
    console.log(prop, event.target.value);
    changeFormInput({ ...formInput, [prop]: event.target.value });
  };
  const handleClickRegister = async (response) => {
    console.log(formInput);
    const res = await fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        formInput,
        password: 'root123',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="hirer-container">
      <Typography variant="subtitle1">ХЭРЭГЛЭГЧИЙН БҮРТГЭЛ</Typography>
      <hr />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Хэрэглэгч</InputLabel>
        <Select
          value={formInput.userType}
          onChange={handleFormChange('userType')}
          label="Хэрэглэгч"
          className={classes.userType}
          // input={<BootstrapInput />}
        >
          <MenuItem value={'individual'} className={classes.letters}>
            Хувь хүн
          </MenuItem>
          <MenuItem value={'company'} className={classes.letters}>
            Байгууллага
          </MenuItem>
        </Select>
      </FormControl>
      <Typography variant="subtitle1">Хувийн мэдээлэл</Typography>
      <hr />
      <div className={classes.personalInfo}>
        <TextField
          value={formInput.lastName}
          label="Овог"
          onChange={handleFormChange('lastName')}
          variant="outlined"
          className={classes.formControl}
          size="small"
        />
        <TextField
          value={formInput.firstName}
          label="Нэр"
          onChange={handleFormChange('firstName')}
          variant="outlined"
          className={classes.formControl}
          size="small"
        />
        <div className={classes.formControl}>
          <FormControl className={classes.letterInput}>
            <Select
              value={registerNo.firstLetter}
              onChange={handleRegisterNo('firstLetter')}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {cyrillicAlphabet.map((letter) => (
                <MenuItem className={classes.letters} value={letter}>
                  {letter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.letterInput}>
            <Select
              value={registerNo.secondLetter}
              onChange={handleRegisterNo('secondLetter')}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {cyrillicAlphabet.map((letter) => (
                <MenuItem className={classes.letters} value={letter}>
                  {letter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={registerNo.numbers}
            label="РД"
            onChange={handleRegisterNo('numbers')}
            className={classes.registerInput}
            size="small"
            variant="outlined"
          />
          <FormHelperText>Регистрийн дугаар</FormHelperText>
        </div>
      </div>
      <Typography variant="subtitle1">Холбоо барих</Typography>
      <hr />
      <div className={classes.personalInfo}>
        <TextField
          value={formInput.phone}
          label="Утас"
          onChange={handleFormChange('phone')}
          helperText="Утасны дугаар"
          variant="outlined"
          className={classes.formControl}
          size="small"
        />
        <TextField
          value={formInput.emergencyPhone}
          label="Утас"
          onChange={handleFormChange('emergencyPhone')}
          helperText="Яаралтай үед холбоо барих дугаар"
          variant="outlined"
          className={classes.formControl}
          size="small"
        />
        <TextField
          value={formInput.email}
          label="И-мэйл хаяг"
          onChange={handleFormChange('email')}
          variant="outlined"
          className={classes.formControl}
          size="small"
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className="login-button"
          style={{ fontSize: '1em', backgroundColor: 'green' }}
          onClick={handleClickRegister}
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
}
