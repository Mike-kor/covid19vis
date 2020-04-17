import React, { useEffect, useState } from "react";
import coronaApi from "../actions/coronaApi";
import { setCountry } from "../actions/coronaAction";
import { useDispatch } from "react-redux";

const CountrySelector: React.FC = () => {
  const [cts, setCts] = useState(new Array<any>());
  const dispatch = useDispatch();

  useEffect(() => {
    coronaApi.getCountries().then((response: any) => {
      let clone = response.data;
      setCts(clone);
    });
  }, []);

  const onChange = (e: any) => {
    coronaApi.country(e.target.value).then((returnValue: any) => {
      dispatch(setCountry(returnValue));
    });
  };

  return (
    <div>
      <select onChange={onChange}>
        {cts &&
          cts.map((ct: any, index: number) => {
            return <option>{ct.country}</option>;
          })}
      </select>
    </div>
  );
};

export default CountrySelector;
