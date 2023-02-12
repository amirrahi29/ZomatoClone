import {useState} from 'react';

const useCount = (count1) => {

    const [count, setCount] = useState(count1);

    return [count, setCount];
}

export default useCount;