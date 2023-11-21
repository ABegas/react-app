import React, {createElement as e, useState} from 'react';

function App() {
  
    const [count, setCount] = useState(0);

    return e('h1', {className: 'test'}, [
        e('span', {className: 'test-inner', key: '1'}, `Count ${count}`),
        e('a', {
            className: 'py-2 px-4 border', 
            href: 'test', 
            key: '2', 
            onClick: (e) => {
                e.preventDefault();
                setCount(count + 1);
                console.log('Test Click')
            }
        }, 
        'Click Test link')
    ]);
}