import React, { useState } from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import { Header } from './../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import TataNexon from "./images/TataNexon.webp";
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img1 from "./images1/img1.jpg";


const ProductAdd = () => {
  const navigate = useNavigate();
    const [product, setProduct] = useState({
        
        title: '',
        description: '',
        rating:'',
        price: 0,
       // supplier_id:
        productImage: null,
        
    });
    // const [bookDetails, setBookDetails] = useState({
    //     title: '',
    //     author: '',
    //     price: 0,
    //     coverImg: null,
    //     stock: 0,
    //     description: '',
    // });








    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        setProduct({ ...product, productImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        const formData = new FormData();
        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('productUrl', product.productImage);
        formData.append('rating', product.rating);
        formData.append('supplier_id',localStorage.getItem("id"));
   
        try {
            
            await axios.post('http://localhost:9091/product/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate("/");
            console.log('Product added successfully');
            
        } catch (error) {
            console.error('Error adding product', error);
        }
    };


  return (
    <>
    <NavigationBar/>
    <Container style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: '100vh' }}>

        <Header text="Welcome to Add Product Here "></Header>
        <div className="app">
        <div className="form-container">
            <h1 className="main-heading">Add Product </h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleInputChange}
                    placeholder="Enter Product Title"
                    required
                />

                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Product description "
                    required
                />

                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Product Price"
                    required
                />

                <label>Rating:</label>
                <input
                    type="text"
                    name="rating"
                    value={product.rating}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Product Rating"
                    required
                />

               

                <label>Product Image:</label>
                <input
                    type="file"
                    name="productImage"
                    className="form-control"
                    accept='image/*'
                    onChange={handleFileChange}
                    required
                />



                <button type="submit">Add Product</button>
            </form>
        </div>
    </div>

    </Container>
    </>
  )
}

export default ProductAdd

