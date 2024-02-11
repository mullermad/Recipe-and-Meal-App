import axiosClient from '../axiosClient.js'

// export function searchMeals({commit},keyword){
//     axiosClient.get(`search.php?s=${keyword}`)
//     .then(({data})=>{
//         debugger;
//         //inside commit specify mutation name
//         commit("setSearchMeals",data);
//     })
    
// }



// using arrow function

export const searchMeals = ({ commit }, keyword) => {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
 
    //inside commit specify mutation name
    commit("setSearchMeals", data);
  });
};

//by letter search done
export const searchMealsByLetter = ({ commit }, letter) => {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    
    //inside commit specify mutation name
    commit("setMealsByLetter", data);
  });
};

//filter Meal by ingrediant
export const searchMealsByIngrediant = ({ commit }, ing) => {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
   

    //inside commit specify mutation name
    commit("setMealsByIndrediant", data.meals);
  });
};