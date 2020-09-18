
export default class BookcaseService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
            price: '20.90'
        },
        {
            id: 2,
            title: 'Code Complete',
            author: 'Steven C. McConnell',
            image: 'https://img3.labirint.ru/rc/e89472bedcbd422f578c8eb2aa6d8808/220x340/books28/272529/cover.jpg?1563607723',
            price: '20.80'
        },
        {
            id: 3,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg',
            price: '34.95'
        },
        {
            id: 4,
            title: 'Grokking Algorithms: An illustrated guide for programmers and other curious people',
            author: 'Aditya Bhargava',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51cV560hqBL._SX396_BO1,204,203,200_.jpg',
            price: '42.71'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data)
            }, 700);
        });
    };
}