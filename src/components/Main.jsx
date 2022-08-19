import { useEffect, useState } from 'react';

const Main = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(props.isLoading);
    }, [props.isLoading]);

    return(
        <div style={{ opacity: loading ? 0 : 1 }}>
            {props.children}
        </div>
    );
}

export default Main;