import { Link, useParams} from "react-router-dom";
 
function CountriesList(props) {
  
  

  
    return (
      <div className="col-5" style={{maxheight: '90vh'}}>
        


            <div className="list-group">
                {
                
                props.countries ?

                props.countries.map((country) => {
                    return <Link
                      className="list-group-item list-group-item-action custom-link"
                      to={`/${country.alpha3Code}`}
                      style={{ width: "50%" }}
                    >
                      {country.name.official}
                    </Link>
                    })
                    
                : <p>Loading...</p>     
                    
                    }
            </div>



      </div>

  );
}
 
export default CountriesList;