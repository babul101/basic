import React,{Component} from 'react';


//Functional Component
// const Header = () => {
//     return <div>Header</div>
// }


class Header extends Component {

    // inputChange() {
    //     console.log('U have made the changes');
    // }

    constructor(props) {
        super(props);

        this.state = {
           // title:'the keywords are:',
            keywords:''
        }
        
    console.log(props);
    }

    // inputChange(event) {
    //     console.log(event.target.value);
    // }

    inputChange(event) {
        this.setState({keywords:event.target.value});
       //this.state.keywords = event.target.value; the code will work but we should not write like this 
        this.props.newsSearch(event.target.value);
    }    

    render() {
                                                                //Inline style
                                                                // const styles = {
                                                                //     header:{
                                                                //         background:'#03a9f4'
                                                                //     },
                                                                //     logo:{
                                                                //         color:'#fff',
                                                                //         fontFamily:'Tahoma',
                                                                //         textAlign:'center'
                                                                //     }
                                                                // }

        return (
                // <header>
                //     <div className='logo'
                //      onClick={() =>console.log('clicked')}>Logo</div>
                //     <input onChange={this.inputChange} />                           
                // </header>                               // <header style={styles.header}> 
                                                        //     <div style={styles.logo}>Logo</div>//<input /> 
                                                                  // </header>
                <header>                                         
                    <div className='logo'                       
                    onClick={()=>console.log('clicked')}>Logo</div>
                    <input onChange = {this.inputChange.bind(this)}/>
                    
                </header>                                              
        )
            
        
    }
}

export default Header;