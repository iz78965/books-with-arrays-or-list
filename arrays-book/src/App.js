import React from 'react';
import './App.css';

import Book, {books} from './Book';
  function App() {
    return (
      <section className='booklist'>
        {books.map((book) => {
                const {title, aurthur, img, id} = book;
                // console.log(book)
                return(
                    // <Book title= {title} aurthur = {aurthur} img = {img} key = {id} />
                    <Book book= {book} key= {book.id} />

                );
            })}

      </section>
    )
  }

export default App;
