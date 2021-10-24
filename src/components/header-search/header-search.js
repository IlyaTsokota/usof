import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from './magnifier.svg';
import './header-search.scss';
import { useHistory } from 'react-router-dom';


const HeaderSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    return (
        <form
            className="header-search"
            onSubmit={(e) => {
                e.preventDefault();
                const term = searchTerm.trim().toLocaleLowerCase();
                if (term) {
                    history.push(`/search?term=${term}`);
                    setSearchTerm('');
                }
            }}
        >
            <input
                type="text"
                placeholder="Search"
                onChange={({ target }) => setSearchTerm(target.value)}
                value={searchTerm} />
            <button type="submit"><SearchIcon /></button>
        </form>
    );
};

export default HeaderSearch;