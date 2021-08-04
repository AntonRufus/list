import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // edit update descriptions
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      // proxy

      // const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
      const response = await fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-sm warning bg-gradient text-light'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.id}`}
        // onClick={() => editTodo(todo.id)}
      >
        Edit
      </button>

      <div
        className='modal fade text-dark bg-dark bg-gradient'
        tabIndex='-1'
        aria-labelledby='modalLabel'
        aria-hidden='true'
        id={`id${todo.id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='modalLabel'>
                Edit descriptions
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-bs-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
