import express from "express";
const router =express.Router();
import { Book } from "../models/bookmodel.js";


//Route for save a new Book
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.autor ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                massage:'send all required fields : title,autor,publisher',
            });

        }

        const newBook={
            title:request.body.title,
            autor: request.body.autor,
            publishYear: request.body.publishYear,
        };
        const book=await Book.create(newBook);
        return response.status(201).send(book);
        
    }catch (error){
        console.log(error.massage);
        response.status(500).send({message:error.massage});
    }
});

//Route for get All Books from datadase
router.get('/',async(request,response)=>{
    try{
        const books=await Book.find({});
        return response.status(200).json({
            count :books.length,
            data: books
        });

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message:error.massage});
    }
});

//Route for get one Book from datadase by id
router.get('/:id',async(request,response)=>{
    try{
        const{id}=request.params;
        const book=await Book.findById(id);
        return response.status(200).json(book);

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message:error.massage});
    }
});

//Route for update book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.autor ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//delete book
router.delete('/:id',async(request,response)=>{
    try{
        const {id}=request.params;
        const result=await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({ message: 'Book not found' }); 
        }

        return response.status(200).send({ message: 'Book deleted successfully' });

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message }) 
    }
});

export default router;