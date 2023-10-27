import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  let listOfRestaurantsjs = [
    {
      data: {
        id: "74453",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "4.0",
      },
    },
    {
      data: {
        id: "74454",
        name: "KFC",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "74455",
        name: "MCD",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "4.1",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
