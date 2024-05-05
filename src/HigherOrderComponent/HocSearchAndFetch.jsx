import React, { useEffect, useState } from 'react';

const HocSearchAndFetch = (WrappedComponent, entity) => {
    return function HocSearchAndFetch() {    
        const [lists, setList] = useState([]);
        const [search, setSearch] = useState('');

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                    const data = await response.json();
                    setList(data); 
                } catch (error) {
                    console.log(error);
                }
                console.log(`https://jsonplaceholder.typicode.com/${entity}`)
            };   
            fetchData();
        }, []);

        let filteredList = lists.slice(0,10).filter(list => {
            if (entity === 'users' && list.name) {
                return list.name.toLowerCase().includes(search.toLowerCase())
            } else if (entity !== 'users' && list.title) {
                return list.title.toLowerCase().includes(search.toLowerCase())   
            }
        }).map((list) => {
            if (entity === 'users') { 
                return (<div key={list.id}>{list.name}</div>)
            }
            return (<div key={list.userId}>{list.title}</div>)           
        });

        return (
            <>
                <input onChange={(e) => setSearch(e.target.value)} /> 
                <WrappedComponent data={filteredList} />
            </>
        );
    };
};

export default HocSearchAndFetch;
