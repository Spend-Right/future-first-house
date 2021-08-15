import { useEffect, useState } from "react";

//import "./styles.css";

// You get these when you register your app at https://developer.trademe.co.nz/api-overview/registering-an-application
// NOTE: Make sure you registered using the Sandbox option
const TRADE_ME_CONFIG = {
  key: "EAA0719A9061D5786FEA7D91BC1E3754",
  secret: "F65C48878DEF28EB9F03ABE67BFED3F0"
};



export default function Api(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // Create a function that fetches the data
    const fetchData = async () => {
      // This does the API request - the 'await' tells our code to wait
      // until we have a response back from the API
      const responseResidential = await fetch(
        `	https://api.tmsandbox.co.nz/v1/Search/Property/Residential.json?price_min=0&price_max=${props.budget}`,
        {
          headers: {
            Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
          }
        }
      );

      const responseNewHomes = await fetch(
        `	https://api.tmsandbox.co.nz/v1/Search/Property/NewHomes.json?price_min=0&price_max=${props.budget}`,
        {
          headers: {
            Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
          }
        }
      );

      const responseRural = await fetch(
        `	https://api.tmsandbox.co.nz/v1/Search/Property/Rural.json?price_min=0&price_max=${props.budget}`,
        {
          headers: {
            Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
          }
        }
      );

      const responseLifestyle = await fetch(
        `	https://api.tmsandbox.co.nz/v1/Search/Property/Lifestyle.json?price_min=0&price_max=${props.budget}`,
        {
          headers: {
            Authorization: `OAuth oauth_consumer_key=${TRADE_ME_CONFIG.key}, oauth_signature_method=PLAINTEXT, oauth_signature=${TRADE_ME_CONFIG.secret}%26`
          }
        }
      );

      // Again, we are waiting for the response
      const residentialData = await responseResidential.json();
      const newHomeData = await responseNewHomes.json();
      const ruralData = await responseRural.json();
      const lifeStyleData = await responseLifestyle.json();

      

      // We have the response now lets update our component state
      // Compares the addresses to not display any duplicates
      const homeData = [...newHomeData.List, ...residentialData.List, ...ruralData.List, ...lifeStyleData.List];
      let newData = [];
      homeData.forEach(element => {
        let ID = element.Address;
        let exists = false
        for(let i = 0; i < newData.length; i++){
          let e = newData[i];
          let e_Address = e.Address;
          if (e_Address === ID){
            exists = true;
          }
        }
        if(!exists){
          newData.push(element);
        }
      });
      
      setData(newData);
      
    };

    // Call our fetch function
    fetchData();
  }, [props.budget]);

  // We haven't got any data back yet, let's show a loading message
  if (!data) {
    return <p>Loading data</p>;
  }
  console.log(data);
  return (
    <div className="Api">
      <h1>Trade Me API</h1>

      <div class="result">
          <text>
              {props.budget}
          </text>
      </div>


      {/* .filter((item)=>item.PriceDisplay<props.budget) 
      Yay we have some data! Let's do stuff with it */}
      <ul>
        {data.filter((item)=>
            parseFloat(item.PriceDisplay.substring(15, item.PriceDisplay.length).replace(/,/g, ''))
            <
            props.budget).map((item) => (
          <div class="Listing_container">
            <div class="Listing_inner">
              <li key={item.ListingId}>
                <h2>{item.Address}, {item.Suburb}, {item.Region}</h2>
                <h3>{item.Bedrooms} Bed</h3>
                <h3>{item.Bathrooms} Bath</h3>
                <h3>{item.PropertyType}</h3>
                <h3 class="House_cost">{item.PriceDisplay}</h3>
                <img src={item.PictureHref} alt="" />
                <a href="#">View Listing on TradeMe</a>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}