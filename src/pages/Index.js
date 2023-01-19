import {Form ,Link, useLoaderData } from "react-router-dom"

function Index(props){
    const cheeses = useLoaderData()

    return( 
        <div>
            <h2>Create a cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Cheese name"/>
                <input type="input" name="countryOfOrigin" placeholder="Country of origin"/>
                <input type="input" name="image" placeholder="Image of the cheese"/>
                <input type="submit" value="Create new cheese" />
            </Form>
        
            {cheeses.map(cheese => (
            <div key={cheese._id} className="cheese"> 
                <Link to={`/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link>
                <img src={cheese.image} alt={cheese.name}/>
                <h3>{cheese.countryOfOrigin}</h3>
            </div>
            ))}
        </div>
    )
}

export default Index