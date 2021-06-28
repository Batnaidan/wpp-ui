import React, { useState } from 'react';

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
}));

export default function BiderForm() {
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
  const [formLevel, changeFormLevel] = useState();
  const classes = useStyles();

  return <div></div>;
}
