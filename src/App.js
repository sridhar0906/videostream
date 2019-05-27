import React, { Component } from "react";
import { Layout,Form} from "antd";
import LoginForm from './components/LoginForm';
import "./App.css";
import Parse from 'parse';

const {Content } = Layout;

class App extends Component {
  
    render() {
        
        return (
            <Layout className="App">
                <Content className="App-content container">
                    <LoginForm form={this.props.form} />
                </Content>
            </Layout>
        )
    }
}

export default Form.create()(App);