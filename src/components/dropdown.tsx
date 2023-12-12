// components/Dropdown.js
"use client"
import React, { useState, ChangeEvent } from 'react';

export default function Dropdown({defaultValue, options}: {defaultValue: string, options: string[]}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='m-3'>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} 
            className='bg-gray-300 rounded-lg p-1'>
                <option value="">{defaultValue}</option>
                {options.map((option) => 
                    <option value={option}>{option}</option>
                )}
                
            </select>

            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    );
};

