import React, {useEffect, useState} from "react";
import coronaApi from "../actions/coronaApi";
import {setCountry} from "../actions/coronaAction";
import {useDispatch} from "react-redux";

const CountrySelector: React.FC = () => {
  const [cts, setCts] = useState(new Array<any>());
  const dispatch = useDispatch();

  useEffect(() => {
    coronaApi.getCountries().then(
        (response : any) =>{
          // TODO : CBV 하면서 배열이 두번 올라감 ㅠㅠ 한단계로 낮춰야됨
          setCts([...cts, response.data]);
        }
    )
  }, []);

  const onChange = (e : any)=>{
    coronaApi.country(e.target.value).then(
        (returnValue : any) => {
          dispatch(setCountry(returnValue));
        }

    )

  }

  return (
    <div>
      <select onChange={onChange}>
      { cts && cts.map((ct:any, index:number) => {
            return ct.map(
                (c : any) =>{
                  return ( <option>{c.country}</option> )
                }
            )
          }
      )
      }
      </select>
    </div>
  );
};

export default CountrySelector;
