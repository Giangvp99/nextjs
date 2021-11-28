import Country from "../../models/country.js"
export default async function handler(req, res){
    let countries = await Country.find()
    res.json(countries)
};
