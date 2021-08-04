import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const input = document.getElementById('input');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      if (!input) {
        console.log('Enter your text, please.');
        alert('Enter your text, please.');
      } else {
        // const response = await fetch('http://localhost:5000/todos', {
        const response = await fetch('/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        console.log(response);
        input.value = '';
        window.location = '/';
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div>
        <h1 className='text-center pt-5 fw-bold fst-italic'>Your List</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
          <input
            type='text'
            className='form-control bg-transparent bg-gradient shadow bg-body rounded border-end-0 border-start-0 border-top-0 border-success fw-normal text-capitalize fs-5'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={'enter some letters'}
            id='input'
          />
          <button className='btn btn-success bg-gradient shadow rounded border-end-0 border-start-0 border-top-0 border-success'>
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
