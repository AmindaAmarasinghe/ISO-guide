import Button from 'react-bootstrap/Button';
import React from "react";
import {useRef} from 'react';
import Select from 'react-select';
import  { Navigate } from 'react-router-dom';

const pro_options = [
    "Chocolate cake",
    "Date cake",
    "Vanilla cake",
    "Chocolate gateau",
];
const NC_options = [
    "Hair pieces",
    "Paper pieces",
    "Fungal growth and taste",
    "Insects",
    "Burn or overcook"
];


class NCdetector extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={email:null, product:null};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.onOptionChangeHandler=this.onOptionChangeHandler.bind(this);
        this.resetForm=this.resetForm.bind(this);
    }
    
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    onOptionChangeHandler = (event) => {
        this.setState({product: event.target.value});
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };
    async handleSubmit(event) {
        //alert('Form was submitted');
        try{
          event.preventDefault();
          let messageBody=JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          });
          console.log(messageBody);

          let res = await fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            body: messageBody,
            mode:'cors',
            headers:{
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json;charset=UTF-8'
            }
          });
    
          let resJson = await res.json();
          if (res.status === 200) {
            console.log(resJson.key);
            if(resJson.key==="value1"){
                window.location.assign('/home');
            }
          } else {

          }
          
        } catch (err) {
          console.log(err);
        }
      }
    
    resetForm(event){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = null)
        );
        this.setState({email: null});
        this.setState({password: null});
    }
    render() {
        return(
        <section
            class="p-5 w-100"
            style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
        >
            <div class="row">
            <div class="col-12">
                <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                    <div class="row d-flex justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        
                        <form onSubmit={this.handleSubmit}>
                   
                        <div className="row mt-3">
                            <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                                Recorded date
                            </label>
                            <input
                                id="email"
                                name="email"
                                ref={this.reEmail}
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                type='date'
                            />
                            
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                                Product name
                            </label><br></br>
                            <select onChange={this.onOptionChangeHandler}>
                                <option>Please choose one option</option>
                                {pro_options.map((option, index) => {
                                    return (
                                        <option key={index}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                           
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-left">
                            <label htmlFor="first" className="form-label">
                                Non confirmity
                            </label><br></br>
                            <select onChange={this.onOptionChangeHandler}>
                                <option>Please choose one option</option>
                                {NC_options.map((option, index) => {
                                    return (
                                        <option key={index}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                           
                            </div>
                        </div>
                        
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={this.handleSubmit}
                                style={{marginTop:'70px'}}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" style={{display: "flex", justifyContent:"center"}}>
                        <img
                        src="img/start.png"
                        class="img-fluid"
                        alt=""
                        width={'80%'}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        );
    }
}
export default NCdetector;