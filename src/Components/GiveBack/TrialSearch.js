import React from "react";
import "./TrialSearch.css";
import axios from "axios";
// import { fetchStores } from "../Tips/TipCaro";

class TrialSearch extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          query: "",
          results: {},
          loading: false,
          message: "",
        };
        this.cancel = "";
      }

  fetchSearchResults = (query) => {
    const TOKEN = 'qX5NUx0FvJXeEYXzzfYd8n_HeU2xx1vnjcqBtoTBmZfRqS78713En7I62FTm8gtYXuMoRuYygRcLFselGL1I9h6ibxZ_gA6wRGBQLj3Ddfhd89C6ceFhCpFVkv2KYXYx'
    const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
    const clientId = "98b9PsyxTF1G2ZABcT9Hng"

    const opts = {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      };

    const searchURLL = `${BASE_URL}?term=thrift%20stores&location=${query} ,${opts}`

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    // axios
    //   .get(`${BASE_URL}?term=thrift%20stores&location=${zipCode}`, opts), {
    //     cancelToken: this.cancel.token,
    //   });

    axios
      .get(`${BASE_URL}?term=thrift%20stores&location=${query}`, opts, {
        cancelToken: this.cancel.token,
      })

      .then((res) => {
        // const total = res.data.total;
        // const totalPagesCount = this.getPageCount( total, 20 );
        console.log(res.data)
        const resultNotFoundMsg = !res.data.length
          ? "There are no more search results. Please try a new search"
          : "";

        this.setState({
          results: res.data.businesses,
          message: resultNotFoundMsg,
        //   totalResults: total,
          loading: false,
        });
      })

      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data. Please check network",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

   //     <div id="store-card" key={store.id}>
        //   <p id="store-name">{store.name}</p>
        //   <img id="store-pic" src={store.image_url} alt="clothes_pic"/>
        //   <h3 id="address">{store.location.address1} <br></br>{store.location.city}, {store.location.zip_code}</h3>
        //   <h6 id="store-tele">{store.display_phone}</h6>
        // </div>



        renderSearchResults = () => {
            const { results } = this.state;
            if ( Object.keys( results ).length && results.length ) {
                return (
                    <div className="results-container">
                        { results.map( result => {
                            return (
                                <a key={ result.id } href={ result.product_link } className="result-item">
                                <p id="store-name">{result.name}</p>
                                <img id="store-pic" src={result.image_url} alt="clothes_pic"/>
                                <h3 id="address">{result.location.address1} <br></br>{result.location.city}, {result.location.zip_code}</h3>
                                <h6 id="store-tele">{result.display_phone}</h6>
                                    
                                    {/* <h6 className="store-name">{result.name}</h6>
                                    <div className="image-wrapper">
                                        <img className="image" src={ result.image_url } alt={`${result.name} image`}/>
                                    </div> */}
                                </a>
                            )
                        } ) }
            
                    </div>
        
    
    )
    }
      };



  render() {
    const { query } = this.state;

    return (
        <div className="container">
          <h2 className="heading">Search for thrift stores near you</h2>
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              name="query"
              value={query}
              id="search-input"
              placeholder="zip..."
              onChange={this.handleOnInputChange}
            />
            <i class="fas fa-search search-icon"></i>
          </label>
          { this.renderSearchResults() }
  
        </div>
      );
    }
  }
  


export default TrialSearch;