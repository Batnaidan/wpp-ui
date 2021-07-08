import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';

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
}));

export default function BiderForm({ userInput, handleChange }) {
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

  const stepLevel = [
    'Хувийн мэдээлэл',
    'Туршлага, ур чадвар',
    'Баталгаажуулалт',
  ];
  const [formLevel, changeFormLevel] = useState(0);

  const handleClickContinue = async (response) => {
    if (formLevel === 3) {
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          userInput,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      changeFormLevel(formLevel + 1);
    }
  };
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <Typography variant="subtitle1">ХЭРЭГЛЭГЧИЙН БҮРТГЭЛ</Typography>
            <hr />
            {/* <Typography variant="subtitle1">Хувийн мэдээлэл</Typography>
        <hr /> */}
            <div className={classes.personalInfo}>
              <TextField
                value={userInput.lastName}
                label="Овог"
                onChange={handleChange('lastName')}
                variant="outlined"
                className={classes.formControl}
                size="small"
              />
              <TextField
                value={userInput.firstName}
                label="Нэр"
                onChange={handleChange('firstName')}
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
                value={userInput.email}
                label="И-мэйл хаяг"
                onChange={handleChange('email')}
                variant="outlined"
                className={classes.formControl}
                size="small"
              />
              <TextField
                value={userInput.phone}
                label="Утас"
                onChange={handleChange('phone')}
                helperText="Утасны дугаар"
                variant="outlined"
                className={classes.formControl}
                size="small"
              />
              <TextField
                value={userInput.emergencyPhone}
                label="Утас"
                onChange={handleChange('emergencyPhone')}
                helperText="Яаралтай үед холбоо барих дугаар"
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
                onClick={handleClickContinue}
              >
                Үргэлжлүүлэх
              </Button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              className="login-button"
              style={{ fontSize: '1em', backgroundColor: 'green' }}
              onClick={handleClickContinue}
            >
              Үргэлжлүүлэх
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              className="login-button"
              style={{ fontSize: '1em', backgroundColor: 'green' }}
              onClick={handleClickContinue}
            >
              Үргэлжлүүлэх
            </Button>
          </div>
        );
      case 3:
        return <div>Terms of Use</div>;
      default:
        return 'Unknown stepIndex';
    }
  }

  return <div className="hirer-container">{getStepContent(formLevel)}</div>;
}
