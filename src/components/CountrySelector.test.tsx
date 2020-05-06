import CountrySelector from "./CountrySelector";
import * as React from "react";

it('this is a sample', ()=>{
    expect(true).toBe(true);
})

describe('국가를 선택하면', ()=>{
    beforeEach( ()=>{
        console.log('no yet');
    });

    it('한국을 골랐을때', ()=>{
        //given
        const wrapper = mount(<CountrySelector/>)
        //when

        //then
        expect(wrapper.find('select').props().value.toBe('Aux'));
    });
})