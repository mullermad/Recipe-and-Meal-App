import axiosClient from '../axiosClient.js'

export function searchMeals({commit},keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        debugger;
        //inside commit specify mutation name
        commit("setSearchMeals",data);
    })
    
}



// using arrow function

// export const searchMeals = ({ commit }, keyword) => {
//   axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
//     debugger;
//     //inside commit specify mutation name
//     commit("setSearchMeals", data);
//   });
// };