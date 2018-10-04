import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'antd';
import NewsletterForm from './NewsletterForm';
import Loading from '../Shared/Loading';
import axios from 'axios';
import { apiUrl, notify } from '../../helpers';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false
    }
  }

  handleLoadingState = loading => {
    //Set loading flag
    this.setState({ loading: loading });
  }

  handleSendEmail = email => {
    this.handleLoadingState(true);
    axios.post(`${apiUrl}/subscribe`, {
      email: email
    }).then(res => {
      if(res.data.success) {
        //If the response from MailChimp is good...
        notify('success', 'Subscribed!', res.data.success);
        this.setState({ email: '' });
        this.handleLoadingState(false);
      } else {
        //Handle the bad MailChimp response...
        notify('error', 'Unable to subscribe!', res.data.error);
        this.handleLoadingState(false);
      }
    }).catch(error => {
      //This catch block returns an error if Node API returns an error
      notify('error', 'Error. Please try again later.', error.message);
      this.handleLoadingState(false);
    });
  }

  handleOnChangeEmail = email => {
    this.setState({
      email: email
    })
  }

  render() {
    return (
      <div className="App">
        <header className="newsletter-header">
          <Row>
            <i className="material-icons">email</i>
          </Row>
        </header>
        <section className="newsletter-content">
          <Row>
            <Col span={24}>
              {this.state.loading
                ? <Loading message="Working on it..." />
                : <NewsletterForm handleSendEmail={this.handleSendEmail} handleOnChangeEmail={this.handleOnChangeEmail} email={this.state.email} />
              }
            </Col>
          </Row>
        </section>

      </div>
    );
  }
}

export default Subscribe;
