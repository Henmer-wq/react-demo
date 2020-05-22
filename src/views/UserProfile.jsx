import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import {connect} from 'react-redux';

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import banner from "assets/img/banner.jpg";
import avatar from "assets/img/faces/face-3.jpg";
import { toggleLoader } from "actions/application";
import Axios from "axios";
import { showLoader } from "actions/application";
import { hideLoader } from "actions/application";

class UserProfile extends Component {
  
  updateProfile = () =>{
    this.props.dispatch( showLoader() )

    Axios.post(`https://jsonplaceholder.typicode.com/users`, { user : { name : 'Test User' } })
      .then(res => {
        console.log( res );

        this.props.dispatch( hideLoader() )
      })
    /* setTimeout(() => {
      this.props.dispatch( hideLoader() )
    }, 2000); */

  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
           
            <Col md={12}>
              <UserCard
                bgImage={banner}
                // avatar={avatar}
                // name="Mike Andrew"
                // userName="michael24"
                // description={
                //   <span>
                //     "Lamborghini Mercy
                //     <br />
                //     Your chick she so thirsty
                //     <br />
                //     I'm in that two seat Lambo"
                //   </span>
                // }
                // socials={
                //   <div>
                //     <Button simple>
                //       <i className="fa fa-facebook-square" />
                //     </Button>
                //     <Button simple>
                //       <i className="fa fa-twitter" />
                //     </Button>
                //     <Button simple>
                //       <i className="fa fa-google-plus-square" />
                //     </Button>
                //   </div>
                // }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state =>({})

export default connect(mapStateToProps)(UserProfile);
