import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../hoc'
import { Modal, Button } from 'react-bootstrap'

class IndexPage extends Component {
  state = {
    modalShow: false
  }

  showModal = event => {
    this.setState({
      modalShow: true
    })
    console.log('True')
  }

  handleClose = () => {
    this.setState({ modalShow: false })
  }

  getModal = () => {
    return (
      <Modal show={this.state.modalShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    const GETMODAL = this.getModal()
    return (
      <Layout>
        {GETMODAL}
        <div className='container bg-light' id='id_main'>
          <h1>The Main Page!!</h1>
          <p>
            Go to{' '}
            <Link href='/auth'>
              <a>Auth</a>
            </Link>
          </p>
          <button onClick={this.showModal}>Modal-Show</button>
          <button onClick={() => Router.push('/auth')}>Go to Auth</button>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
