// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('An error happened. Please check console.');
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-md">
                <BackButton />
            </div>
            <h1 className="text-4xl my-6 text-sky-700">Show Book</h1>
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <Spinner />
                </div>
            ) : (
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-md p-8 bg-white shadow-md">
                    {error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        <>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">ID</span>
                                <span>{book._id}</span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">Title</span>
                                <span>{book.title}</span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">Author</span>
                                <span>{book.autor}</span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                                <span>{book.publishYear}</span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">Create Time</span>
                                <span>{new Date(book.createdAt).toString()}</span>
                            </div>
                            <div className="my-4">
                                <span className="text-xl mr-4 text-gray-500">Updated Time</span>
                                <span>{new Date(book.updatedAt).toString()}</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShowBook;
