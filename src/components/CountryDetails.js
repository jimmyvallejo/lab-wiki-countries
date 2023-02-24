import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails(props) {
  const { id } = useParams();

  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    if (props.countries) {
      const country = props.countries.find((countriesObj) => {
        return countriesObj.alpha3Code === id;
      });

      if (country) {
        setFoundCountry(country);
      }
    }
  }, [props.countries, id]);

  return (
    <div className="col-7">
      <div>
        {props.countries ? (



              
              <table className="table">
                <thead><h1>{foundCountry?.name?.official}</h1></thead>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>Capital</td>
                    <td>{foundCountry?.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {foundCountry?.area} <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {foundCountry?.borders?.map((elem) => {
                          return (
                            <li key={elem}>
                              <Link to={`/${elem}`}>{elem}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>


        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;