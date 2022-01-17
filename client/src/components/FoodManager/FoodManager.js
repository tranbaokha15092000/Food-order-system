import React from 'react';
import { foodList } from "../../mocks/foodList" 
import TodayMenuCreator from './TodayMenuCreator';
import FoodCreator from './FoodCreator';

function FoodManager(props) {
    return (
        <div className="w-full h-full max-w-7xl flex">
            <TodayMenuCreator />
            <FoodCreator />
        </div>
    );
}

export default FoodManager;