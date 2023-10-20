import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react';
import './Newproduct.css';

export default class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    };
    // Create a ref for the file input
    this.fileInput = React.createRef();
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onChangeQuantity = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };

  onChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(`name:${this.state.name}`);
    console.log(`description:${this.state.description}`);
    console.log(`category:${this.state.category}`);
    console.log(`quantity:${this.state.quantity}`);
    console.log(`price:${this.state.price}`);
    console.log(`file:${this.state.file.name}`);
    this.setState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      file: null,
    });
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      file: null,
    });
    // Reset the value of the file input
    if (this.fileInput.current) {
      this.fileInput.current.value = "";
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>New Product</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="formFile" className="form-label">
            Upload File
          </Form.Label>
          <Form.Control
            type="file"
            id="formFile"
            ref={this.fileInput}
            onChange={this.onFileChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={this.onChangeName}
            value={this.state.name}
          />
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={this.onChangeDescription}
            value={this.state.description}
          />
          <Form.Control
            type="text"
            placeholder="Category"
            onChange={this.onChangeCategory}
            value={this.state.category}
          />
          <Form.Control
            type="text"
            placeholder="Quantity"
            onChange={this.onChangeQuantity}
            value={this.state.quantity}
          />
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={this.onChangePrice}
            value={this.state.price}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {' '}
        <Button variant="primary" onClick={this.clearForm}>
          Cancel
        </Button>
      </Form>
    );
  }
}
