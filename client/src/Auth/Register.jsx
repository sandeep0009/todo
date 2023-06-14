import React from 'react';
import Layout from '../Components/Layout';

const Register = () => {
  return (
    <Layout>
      <div className="register">
        <h1>Register Yourself</h1>
        <form>
          <div>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <input type="text" placeholder="Enter your e-mail" />
          </div>
          <div>
            <input type="text" placeholder="Enter your password" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
