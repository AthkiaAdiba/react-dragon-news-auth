import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h2 className="text-2xl mb-6">All Category</h2>
            {
                categories.map(category => <NavLink
                    className={({isActive}) => isActive ? 'bg-gray-400 block ml-7 mb-4 text-xl font-semibold' : 'block ml-7 mb-4 text-xl font-semibold'}
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;