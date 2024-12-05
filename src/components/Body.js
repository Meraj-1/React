import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { CiSearch } from "react-icons/ci";
import RestaurantList from "../utils/mockdata";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(RestaurantList);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const updatedList = RestaurantList.filter((restaurant) => 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
            restaurant.info.areaName.toLowerCase().includes(searchText.toLowerCase()) ||
            restaurant.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(updatedList);
    }, [searchText]);

    return (
        <div className="body">
            <div className="search-box">
                <input
                    placeholder="Search a restaurant you want"
                    value={searchText}
                    type="text"
                    onChange={handleSearchChange}
                />
                <CiSearch className="search-icon" />
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurantData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
