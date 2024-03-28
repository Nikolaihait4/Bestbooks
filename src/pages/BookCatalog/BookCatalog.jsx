import { useEffect } from 'react';
import { getAllBook } from '../../components/services/api';
import { useState } from 'react';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookData = await getAllBook();
        setBooks(bookData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="book-catalog">
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <img src={book.imageUrl} alt={book.title} />
            <div>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
              <p>Rating: {book.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCatalog;
