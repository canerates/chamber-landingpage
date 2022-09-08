import { useEffect, useState } from 'react';
import loaderImg from '../assets/images/common/loader.png';

const Loader = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(props.isLoading);
    }, [props.isLoading]);

    return(
        <div className='loader' style={{ display: loading ? 'block' : 'none' }}>
            <div id='spinner' >
                <img src={loaderImg} alt='loading...' />
            </div>
        </div>
        
    );
}

export default Loader;