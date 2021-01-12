import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ matginTop: '200px'}}>
      <h3>Welcome</h3>
      <p>Check out the repo README file for Notes about SSR with React</p>
      <p><a href="https://github.com/mu-majid/SSR-React-Redux">Link To Repo</a></p>

    </div>
  );
}

export default {
  component: Home
};