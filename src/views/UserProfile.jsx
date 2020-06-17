import React, { Component } from "react";

import { Container, Header, Grid, Form } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
import img from "assets/img/banner.jpg";
import axios from 'axios';
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserProfile extends Component {
constructor(props) {
  super(props);
    this.state = {
      selectedFile: null,
      loaded:0
    }
 
}
checkMimeType=(event)=>{
  //getting file object
  let files = event.target.files 
  //define message container
  let err = []
  // list allow mime type
 const types = ['application/tiff', 'application/pdf']
  // loop access array
  for(var x = 0; x<files.length; x++) {
   // compare file type find doesn't matach
       if (types.every(type => files[x].type !== type)) {
       // create error message and assign to container   
       err[x] = files[x].type+' is not a supported format\n';
     }
   };
   for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
       // discard selected file
      toast.error(err[z])
      event.target.value = null
  }
 return true;
}
maxSelectFile=(event)=>{
  let files = event.target.files
      if (files.length > 1) { 
         const msg = 'Only 1 PDF can be uploaded at a time'
         event.target.value = null
         toast.warn(msg)
         return false;
    }
  return true;
}
checkFileSize=(event)=>{
let files = event.target.files
let size = 2000000 
let err = []; 
for(var x = 0; x<files.length; x++) {
if (files[x].size > size) {
 err[x] = files[x].type+'es demasiado grande, elija un archivo más pequeño\n';
}
};
for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
// discard selected file
toast.error(err[z])
event.target.value = null
}
return true;
}
onChangeHandler=event=>{
var files = event.target.files
if(this.maxSelectFile(event) && this.checkMimeType(event) &&    this.checkFileSize(event)){ 
// if return true allow to setState
   this.setState({
   selectedFile: files,
   loaded:0
})
}
}
onClickHandler = () => {
  const data = new FormData() 
  for(var x = 0; x<this.state.selectedFile.length; x++) {
    data.append('file', this.state.selectedFile[x])
  }
  axios.post("http://localhost:8000/upload", data, {
    onUploadProgress: ProgressEvent => {
      this.setState({
        loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
      })
    },
  })
    .then(res => { // then print response status
      toast.success('upload success')
    })
    .catch(err => { // then print response status
      toast.error('upload fail')
    })
  }

render() {
  return (
    <div class="container">
      <div class="row">
        <div class="offset-md-6 col-md-12">
             <div class="form-group files">
              {/* <label>Upload Your File </label> */}
              <input type="file" class="form-control" multiple onChange={this.onChangeHandler}/>
            </div>  
            <div class="form-group">
            <ToastContainer />
            <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>
      
            </div> 
            
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

      </div>
    </div>
    </div>
  );
}
}
// class UserProfile extends Component {
  
//   state = {
//     file: null,
//     numPages: 0,
//     pageNumber: 1
//   }

//   onFileChange = (event) => {
//     this.setState({
//       file: event.target.files[0]
//     });
//   }

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }

//   nextPage = () => {

//     const currentPageNumber = this.state.pageNumber;
//     let nextPageNumber;

//     if (currentPageNumber + 1 > this.state.numPages) {
//       nextPageNumber = 1;
//     } else {
//       nextPageNumber = currentPageNumber + 1;
//     }

//     this.setState({
//       pageNumber: nextPageNumber
//     });
//   }

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <Container>
//         <br />
//         {/* <Header textAlign="center">PDF</Header> */}
//         <Form>
//           <input type="file" onChange={this.onFileChange}>
//           </input>
//         </Form>
//         <Grid centered columns={2}>
//           <Grid.Column textAlign="center" onClick={this.nextPage}>
//             <br/>
//             <Document file={this.state.file} onLoadSuccess={this.onDocumentLoadSuccess} noData={<h6>Please select a file</h6>}>
//               <Page pageNumber={pageNumber} />
//             </Document>

//             {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
//           </Grid.Column>
//         </Grid>
//       </Container>
//     );
//   }
// }


export default  UserProfile;

//================================================================================================================================================================================================================================================

// import React, { Component } from "react";
// import {
//   Grid,
//   Row,
//   Col,
//   FormGroup,
//   ControlLabel,
//   FormControl
// } from "react-bootstrap";
// import {connect} from 'react-redux';

// import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";

// import banner from "assets/img/banner.jpg";
// import avatar from "assets/img/faces/face-3.jpg";
// import { toggleLoader } from "actions/application";
// import Axios from "axios";
// import { showLoader } from "actions/application";
// import { hideLoader } from "actions/application";

// class UserProfile extends Component {
  
//   updateProfile = () =>{
//     this.props.dispatch( showLoader() )

//     Axios.post(`https://jsonplaceholder.typicode.com/users`, { user : { name : 'Test User' } })
//       .then(res => {
//         console.log( res );

//         this.props.dispatch( hideLoader() )
//       })
//     /////////////setTimeout(() => {
//     ///////////// this.props.dispatch( hideLoader() )
//    ///////////// }, 2000); 

//   }

//   render() {
//     return (
//       <div className="content">
//         <Grid fluid>
//           <Row>
           
//             <Col md={12}>
//               <UserCard
//                 bgImage={banner}
//                 /////////////// avatar={avatar}
//                 /////////////// name="Mike Andrew"
//                 /////////////// userName="michael24"
//                 /////////////// description={
//                 ///////////////   <span>
//                 ///////////////     "Lamborghini Mercy
//                 ///////////////     <br />
//                 ///////////////     Your chick she so thirsty
//                 ///////////////     <br />
//                 ///////////////     I'm in that two seat Lambo"
//                 ///////////////   </span>
//                 /////////////// }
//                 /////////////// socials={
//                 ///////////////   <div>
//                 ///////////////     <Button simple>
//                 ///////////////       <i className="fa fa-facebook-square" />
//                 ///////////////     </Button>
//                 ///////////////     <Button simple>
//                 ///////////////       <i className="fa fa-twitter" />
//                 ///////////////     </Button>
//                 ///////////////     <Button simple>
//                 ///////////////       <i className="fa fa-google-plus-square" />
//                 ///////////////     </Button>
//                 ///////////////   </div>
//                 /////////////// }
//               />
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state =>({})

// export default connect(mapStateToProps)(UserProfile);
