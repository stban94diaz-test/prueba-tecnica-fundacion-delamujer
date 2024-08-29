import Iframe from "react-iframe";
import { ICountry } from "../../shared/types/country";

interface Props {
    country: ICountry;
}

export function Country({ country: {name, currencies, region, capital, area, maps} }: Props) {
    return (
        <div>
            Nombre comun: {name.common}<br/>
            Nombre oficial: {name.official}<br/>
            Moneda: {currencies[Object.keys(currencies)[0]].name}<br/>
            Región: {region}<br/>
            Capital: {capital[0]}<br/>
            Área: {area}<br />
            <Iframe url={maps.googleMaps} />
        </div>
    )
}