import Book from "../model/Book";

const MOCK_BOOK = [
    new Book({
        id: 1,
        name: 'Johnson - Kutch',
        price:'85 $'
      }),
      new Book({
        id: 2,
        name: 'Wisozk Group',
        price:'90 $'
      }),
      new Book({
        id: 3,
        name: 'Denesik LLC',
        price:'105 $'
      }),
      new Book({
        id: 4,
        name: 'Purdy, Keeling and Smitham',
        price:'79 $'
      }),
      new Book({
        id: 5,
        name: 'Kreiger - Waelchi',
        price:'100 $'
      }),
      new Book({
        id: 6,
        name: 'Lesch - Waelchi',
        price:'200 $'
      })
];

export default MOCK_BOOK;