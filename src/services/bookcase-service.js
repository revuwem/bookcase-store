
export default class BookcaseService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan J. Fowler'
            },
            {
                id: 2, 
                title: 'Code Complete',
                author: 'Steven C. McConnell'
            },
            {
                id: 3,
                title: 'Release It!',
                author: 'Michael T. Nygard'
            }
        ];
    }
}