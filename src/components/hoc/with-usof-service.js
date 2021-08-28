import React from 'react';
import { UsofServiceConsumer } from '../usof-service-context';

const withUsofService = () => (Wrapped) => {
    return (props) => {
        return (
            <UsofServiceConsumer>
                {
                    (usofService) => {
                        return (<Wrapped {...props}
                            usofService={usofService} />
                        );
                    }
                }
            </UsofServiceConsumer>
        );
    };
};

export default withUsofService;