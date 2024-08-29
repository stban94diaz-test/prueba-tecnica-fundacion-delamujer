import axios from "axios"
import { URL_COUNTRIES } from "../shared/types/contants"
import { ICountry } from "../shared/types/country"

export const getCountryData = async (search: string): Promise<ICountry[]> => {
    const res = await axios.get(
        `${URL_COUNTRIES}name/${search}`
    )

    return res.data;
}