import Iframe from "react-iframe";
import { ICountry } from "../../shared/types/country";

interface Props {
    country: ICountry;
}

export function Country({ country: {name, currencies, region, capital, area, maps} }: Props) {
    return (
        <div>
            <b>Nombre comun</b>: {name.common}<br/>
            <b>Nombre oficial</b>: {name.official}<br/>
            <b>Moneda</b>: {currencies[Object.keys(currencies)[0]].name}<br/>
            <b>Región</b>: {region}<br/>
            <b>Capital</b>: {capital[0]}<br/>
            <b>Área</b>: {area}<br />
            <Iframe width="100%" url={maps.googleMaps} />
        </div>
    )
}