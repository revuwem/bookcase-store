import React from 'react';
import {BookcaseServiceConsumer} from '../bookcase-service-context';

const withBookcaseService = () => (Wrapped) =>{
    return (props)=>{
        return (
            <BookcaseServiceConsumer>
                {
                    (bookcaseService)=>{
                       return (
                           <Wrapped {...props} bookcaseService={bookcaseService} />
                       );
                    }
                }
            </BookcaseServiceConsumer>
        );
    };
};

export default withBookcaseService;