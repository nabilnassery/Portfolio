import React from 'react';
import Header from './Header/Header';
import Comment from './Comment/Comment';
import Footer from './Footer/Footer';
import Main from './Main/Main';


function Blog() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Comment />
      <Footer />
    </div>
  );
}

export default Blog;