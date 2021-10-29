import React, {useCallback, useEffect, useState} from 'react';
import {fetchDataPromise} from "../../actions/utills/fetch-data";

const withLike = (Wrapped) => {
    return ({usofService, id}) => {
        const [likes, setLikes] = useState(0);
        const [loading, setLoading] = useState(true);
        const getLikes = useCallback(() => {
            setLoading(true);
            fetchDataPromise({
                service: usofService.getLikes,
                data: id
            }).then((resp) => {
                setLikes(resp.data);
                setLoading(false);
            });
        }, [id, usofService, setLoading]);

        const onLike = () => fetchDataPromise({
            service: usofService.addLike,
            data: id
        }).then(() => {
            return getLikes();
        });

        const onDislike = () => fetchDataPromise({
            service: usofService.addDislike,
            data: id
        }).then(() => {
            return getLikes();
        });

        useEffect(() => {
            getLikes();
        },[getLikes]);

        return <Wrapped likes={likes} onLike={onLike} onDislike={onDislike} loading={loading}/>;
    };
};

export default withLike;