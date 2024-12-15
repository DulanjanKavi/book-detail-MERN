// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl my-6 text-sky-700">Book List</h1>
                <Link to="/books/create" className="text-sky-800 text-4xl hover:text-sky-600">
                    <MdOutlineAddBox />
                </Link>
            </div>
            {loading ? (
                <div className="flex items-center justify-center min-h-screen">
                    <Spinner />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-2 border-b-2 border-gray-300 text-left">No</th>
                                <th className="p-2 border-b-2 border-gray-300 text-left">Title</th>
                                <th className="p-2 border-b-2 border-gray-300 text-left max-md:hidden">Author</th>
                                <th className="p-2 border-b-2 border-gray-300 text-left max-md:hidden">Publish Year</th>
                                <th className="p-2 border-b-2 border-gray-300 text-center">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book._id} className="hover:bg-gray-100 transition">
                                    <td className="p-2 border-b border-gray-200 text-left">{index + 1}</td>
                                    <td className="p-2 border-b border-gray-200 text-left">{book.title}</td>
                                    <td className="p-2 border-b border-gray-200 text-left max-md:hidden">{book.autor}</td>
                                    <td className="p-2 border-b border-gray-200 text-left max-md:hidden">{book.publishYear}</td>
                                    <td className="p-2 border-b border-gray-200 text-center">
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`/books/details/${book._id}`} className="text-2xl text-green-800 hover:text-green-600">
                                                <BsInfoCircle />
                                            </Link>
                                            <Link to={`/books/edit/${book._id}`} className="text-2xl text-blue-800 hover:text-blue-600">
                                                <AiOutlineEdit />
                                            </Link>
                                            <Link to={`/books/delete/${book._id}`} className="text-2xl text-red-800 hover:text-red-600">
                                                <MdOutlineDelete />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home;
