import axios from "axios";
import { to } from "await-to-js";

class coronaApi {
    static getCountries = async () => {
        const [err, response] = await to(
            axios.get(`https://corona.lmao.ninja/v2/countries`)
        );
        if ( err ) return 'err';
        return response;
    };

    static getCountries2 = () => {
        axios.get(`https://corona.lmao.ninja/v2/countries`).then(
            (response)=>{
                return response.data;
            }
        )
        return null;
    };

    static country = async (country : string) => {
        const [err, response] = await to(
            axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
        );
        if ( err ) return 'err';

        const thisCountry = response.data;
        if (response.data === "Country not found") {
            return "Country not found";
        }

        return thisCountry;
    };
}

export default coronaApi;
