import React, {Component} from "react";
import "./Form.css";

 class Form extends Component {

    state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        count:1,
        ItemArray:[]
    };


    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    changeState(value){
        this.setState({
            clicked:{value}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Worked")


        const temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            count:this.state.count
        };

        this.state.ItemArray.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            count:this.state.count +1
        });    
    } 
    

    render(){
        return(
            <div className="formContainer">
                <form className="form">
                    <label className="elements" htmlFor="name">Name :</label>
                    <input className="input-box elements" type="text" id="name" value={this.state.value} name="name" onChange={this.handleChange}/>
                    <br />
                    <br />

                    <label className="elements" >Department :</label>
                    <input className="input-box elements" type="text" name="dept" value={this.state.value}  onChange={this.handleChange}/>
                    <br />
                    <br />
                    <label className="elements" htmlFor="rate">Rating :</label>
                    <input className="input-box elements" type="number" id="rate" value={this.state.value} name="rating" onChange={this.handleChange}/>
                    <br /> 
                    <br />
                </form>
                <button className="submit-btn" type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
                <div className="dataContainer">
                    {this.state.ItemArray.length>0 && this.state.ItemArray.map( (elmnt) => {
                        return (
                            <div className="displayData">
                                <h2> {elmnt.count} : Name: {elmnt.name} | Dept: {elmnt.dept} | Rating: {elmnt.rating}</h2>
                            </div>
                        );
                    })}
                    </div>
            </div>
        )
    }
}

export default Form
