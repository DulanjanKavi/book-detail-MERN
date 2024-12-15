// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAutor(response.data.autor);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        setError('An error happened. Please check console.');
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditBook = () => {
    const data = { title, autor, publishYear };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
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
      <h1 className="text-4xl my-6 text-sky-700">Edit Book</h1>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-md p-8 bg-white shadow-md">
          <div className="my-4">
            <label className="block text-lg font-medium text-gray-600 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg font-medium text-gray-600 mb-2">Author</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg font-medium text-gray-600 mb-2">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500"
            />
          </div>
          <button
            className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition duration-300"
            onClick={handleEditBook}
          >
            Save
          </button>
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default EditBook;
