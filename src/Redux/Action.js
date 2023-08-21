import { PRODUCTSDATA,ADDTOCART,ONSEARCH,SHOWCARTDATA,REMOVEFROMCART } from "./Constants";

export const productOnLoad = () => {
    return({
        type:PRODUCTSDATA
    })
}

export const productOnSearch = (searchterm) => {
    return({
        type:ONSEARCH,
        data:searchterm
    })
}


export const addToCart = (id,title,category,price,image) => {
    return(
        {
            type:ADDTOCART,
            data:{
                id,
                title,
                category,
                price,
                image
            }
        }
    )
}

export const removeFromCart = (id) => {
    return(
        {
            type:REMOVEFROMCART,
            data:id
        }
    )
}

export const showCartData = (result) => {
    return(
        {
            type:SHOWCARTDATA,
            data:result

        }
    )
}    