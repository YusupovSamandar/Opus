
import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [
    { value: 'Dushanba', label: 'Dushanba', color: '#FF8B00' },
    { value: 'Seshanba', label: 'Seshanba', color: '#FFC400' },
    { value: 'Chorshanba', label: 'Chorshanba', color: '#36B37E' },
    { value: 'Payshanba', label: 'Payshanba', color: '#00875A' },
    { value: 'Juma', label: 'Juma', color: '#253858' },
    { value: 'Shanba', label: 'Shanba', color: '#666666' },
    { value: 'Yakshanba', label: 'Yakshanba', color: '#666666' }
];
export default function AnimatedMulti() {
    return (
        <Select
            menuPlacement={'top'}
            enuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            className="my-cool-select-top"
        />
    );
}
