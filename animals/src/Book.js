import React from 'react';

const Book = ({ book, markAsRead, deleteBook }) => {
  return (
    <li>
      <span style={{ textDecoration: book.read ? 'line-through' : 'none' }}>
        {book.title}
      </span>{' '}
      {!book.read && (
        <>
          <button onClick={() => markAsRead(book.id)}>Mark as Read</button>{' '}
        </>
      )}
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
};

export default Book;
