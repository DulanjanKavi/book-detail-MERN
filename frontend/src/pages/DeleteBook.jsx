// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        setError('An error happened. Please check console.');
        console.error(error);
      });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md">
        <BackButton />
      </div>
      <h1 className="text-4xl my-6 text-sky-700">Delete Book</h1>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-full max-w-md p-8 bg-white shadow-md">
          <h3 className="text-2xl mb-4 text-gray-600">Are you sure you want to delete this book?</h3>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete It.
          </button>
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
