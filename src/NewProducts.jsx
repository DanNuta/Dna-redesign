import React, { Component } from 'react';

class NewProducts extends Component {
    
    
    state = {
       id: "",
       title: "",
       counter: 1, /* */
       img: "",
       price: 0,   /* */
       description: "",
       filter: "",
       curentPrice: 0,
       link: ""
    }

    id = (e) =>{
        let value = e.target.value;
        this.setState({id: value})
    }


    title = (e) =>{
        let value = e.target.value;
        this.setState({title: value})
    }


    img = (e) =>{
        let value = e.target.value;
        this.setState({img: value})
    }




    description = (e) =>{
        let value = e.target.value;
        this.setState({description: value})
    }


    filter = (e) =>{
        let value = e.target.value;
        this.setState({filter: value})
    }

    curentPrice = (e) =>{
        let value = e.target.value;
        this.setState({curentPrice: value})
    }




    link = (e) =>{
        let value = e.target.value;
        this.setState({link: value})
    }


    submit = (e) =>{

        e.preventDefault();


        this.props.onAddNewProducts(this.state)

        this.setState({ id: "",
        title: "",
        counter: 1, /* */
        img: "",
        price: 0,   /* */
        description: "",
        filter: "",
        curentPrice: 0,
        link: ""})

    }



    filesFromImg = (e) =>{
        let img = new FileReader();

        img.onload = () =>{
            if(img.readyState === 2){
                this.setState({img: img.result})
            }
        }

        img.readAsDataURL(e.target.files[0])
    }


    





    render() { 
        return ( 
            <div>


                <form onSubmit={this.submit} action="">
                    <input onChange={this.id} value={this.state.id} type="text" placeholder='id' />
                    <input onChange={this.title} type="text" value={this.state.title} placeholder='title' />
                    <input onChange={this.img} type="file" value={this.state.img} accept='images/*' onChange={this.filesFromImg} placeholder='img' />
                    <textarea onChange={this.description} value={this.state.description} placeholder='description'></textarea>
                    <input onChange={this.filter} type="text" value={this.state.filter}  placeholder='filter' />
                    <input onChange={this.curentPrice} type="number" value={this.state.curentPrice} placeholder='curentPrice' />
                    <input onChange={this.link} type="text" value={this.state.link} placeholder='link'/>

                    <button onClick={this.submit}>Sumbit</button>
                </form>

                <img src={this.state.img} alt="" />
            </div>
         );
    }
}
 
export default NewProducts;