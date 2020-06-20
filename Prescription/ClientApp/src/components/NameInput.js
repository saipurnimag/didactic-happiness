import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AudioOutlined, AudioTwoTone } from '@ant-design/icons';
import { IconButton } from '@material-ui/core';
import useSpeechRecognition from './UseSpeechRecognition';


const NameInput = (props) => {

      const [lang, setLang] = useState('en-US');
      const [value, setValue] = useState('');
      const [blocked, setBlocked] = useState(false);

      const onEnd = () => {
            // You could do something here after listening has finished
            // props.handleNameChange()
      };

      const onResult = (result) => {
            setValue(result);
      };

      const changeLang = (event) => {
            setLang(event.target.value);
      };

      const onError = (event) => {
            if (event.error === 'not-allowed') {
                  setBlocked(true);
            }
      };

      const { listen, listening, stop, supported } = useSpeechRecognition({
            onResult,
            onEnd,
            onError,
      });

      const toggle = listening
            ? stop
            : () => {
                  setBlocked(false);
                  listen({ lang });
            };

      const [values, setValues] = React.useState({
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
      });
      const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
            event.preventDefault();
      };
      return (
            <>
                  <InputLabel htmlFor="standard-adornment-password">
                        Name
                  </InputLabel>
                  <Input
                        id="transcript"
                        value={value}
                        endAdornment={

                              <InputAdornment position="end" >
                                    <IconButton onClick={toggle} >
                                          {listening ? <AudioTwoTone /> : <AudioOutlined />}
                                    </IconButton>
                              </InputAdornment>
                        }
                  />
            </>
      );
}

export default NameInput;