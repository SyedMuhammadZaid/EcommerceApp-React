import { FETCHEDDATA, ADDTOCART, SHOWCARTDATA, REMOVEFROMCART } from "./Constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case FETCHEDDATA:
      return [...action.data];

    default:
      return data;
  }
};

export const cartData = (cartdata = [], action) => {
  console.log("from cartdata")
  switch (action.type) {
    case ADDTOCART:
      return [action.data, ...cartdata];

    case REMOVEFROMCART:
        console.log("id",action.data)
        let action_id = cartdata.findIndex((element)=>element.id===action.data)
        cartdata.splice(action_id,1);
        console.log("removefromcart",[...cartdata])
        return [...cartdata]

    default:
      return cartdata;
  }
};

export const displayData = (data=[],action) => {
  console.log("from displaydata")
  switch (action.type) {
    case SHOWCARTDATA:
      const uniqueDataWithCounts = action.data.reduce((acc, current) => {
        const existingItem = acc.find((item) => item.id === current.id);
        if (existingItem) {
          existingItem.count++;
        } else {
          acc.push({ ...current, count: 1 });
        }
        return acc;
      }, []);
      console.log(uniqueDataWithCounts);
      return uniqueDataWithCounts;
    
      default:
        return data

  }


};
