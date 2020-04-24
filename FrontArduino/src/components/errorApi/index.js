import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from '../';
import { Creators as ErrorActions} from '../../ducks/stores/errors';

const ErrorApi = () => {
    const [openToast, setOpenToast] = useState(true);
    const dispatch = useDispatch();

    const handleCloseToast = () => {
        setOpenToast(false);
    };

    const { data, status } = useSelector(store => store.error.payload);

    const dispatchClear = useCallback(()=> { 
        dispatch(ErrorActions.clearState());
    }, [dispatch])

    useEffect(() => {
        dispatchClear()
    }, [dispatchClear]);

    useEffect(() => {
        data ? setOpenToast(true) : setOpenToast(false);
    }, [data]);
    
    return (
        <>
            <Toast
                open={openToast}
                close={handleCloseToast}
                message={status && data && data.map(({ message }) => message)}
                duration={4000}
                type={status !== 200 ? 'error' : 'success'}
             />
        </>
    )
};

export default ErrorApi;