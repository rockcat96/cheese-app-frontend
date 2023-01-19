import {redirect} from "react-router-dom"

const URL = "https://cheese-app-backend-tai0.onrender.com"

export const createAction = async ({request}) => {
    //get data from form
    const formData = await request.formData()

    //set up our new cheese to match the schema
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }
    //send the new cheese to our API
    await fetch(URL + "/cheese", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheese),
    })
    return redirect("/")
}

export const updateAction = async({request, params}) => {
    //get form data
    const formData = await request.formData()

    //set up our new cheese to match schema
    const updatedCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image"),
    }

    //send the new cheese to our API
    await fetch(URL + "/cheese/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {
    await fetch(URL + "/cheese/" + params.id,{
        method: "delete"
    })

    return redirect("/")
}