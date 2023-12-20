import React from 'react';
import getMyclass from '../../Hook/getMyclass';

const Myclasses = () => {
    const [myclass]=getMyclass()
    return (
        <div>
            {
                myclass.name
            }
        </div>
    );
};

export default Myclasses;