import './index.scss';

import React, { useState } from "react";

import Button from '../Button/Button';
import CustomSelect from '../CustomSelect/CustomSelect';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');   
  const [checked, setChecked] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const handleCheckChange = () => {
      setChecked(!checked);
  }

  const errorClasses = (err) => {
    return err ? 'form-error visible' : 'form-error';
  }

  const validateBeforeSubmit = () => {
    const namePattern = /^[а-яА-ЯёЁa-zA-Z-\s]+$/;
    const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
    const phonePattern = /[\+]\d[\d\(\)\ -]{9,14}\d$/;

    if (!namePattern.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (!emailPattern.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!phonePattern.test(phone)) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    validateBeforeSubmit();
  }

  return(
      <form className='form'>
      <h1 className='form-title'>Регистрация</h1>
      <p className='form-sign-in'>Уже есть аккаунт? <a href='#'>Войти</a></p>
      <div className='form-input-wrapper'>
        <label htmlFor='name'>
          Имя
        </label>
        <input 
          type='text' 
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Введите Ваше имя'
        />
        <p className={errorClasses(nameErr)}>Введено не корректное значение</p>
      </div>
      <div className='form-input-wrapper'>
        <label htmlFor='email'>
          Email
        </label>
        <input 
          type='email' 
          id='email'
          placeholder='Введите ваш email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={errorClasses(emailErr)}>Введено не корректное значение</p>
      </div>
      <div className='form-input-wrapper'>
        <label htmlFor='phone'>
          Номер телефона
        </label>
        <input 
          type='tel' 
          id='phone'
          placeholder='Введите номер телефона'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className={errorClasses(phoneErr)}>Введено не корректное значение</p>
      </div>
      <div className='form-input-wrapper'>
        <label htmlFor='language'>
          Язык
        </label>
        <CustomSelect/>
      </div>
      <div className='form-checkbox'>
            <input 
              className='form-checkbox-input'
              type='checkbox' 
              id='conditions' 
              checked={checked} 
              onChange={() => handleCheckChange()}/>
            <label 
              className='form-checkbox-label'
              htmlFor='conditions'
              >
                Принимаю<a href='#'>&nbsp;условия&nbsp;</a>использования
              </label>
        </div>
      <Button 
        title="Зарегестрироваться"
        disabled={!name || !email || !phone || !checked}
        click={(e) => handleSubmitForm(e)}
        />
    </form>
  )
}

export default RegistrationForm;