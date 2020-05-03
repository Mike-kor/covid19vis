import React from "react";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";

const WorldMap : React.FC = () => {
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return (
        <ComposableMap>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
            </Geographies>
        </ComposableMap>
    );
}

export default WorldMap;