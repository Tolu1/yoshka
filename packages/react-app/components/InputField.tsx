import React from 'react';

interface InputProps {
    label: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({ label, type, onChange }) => {
    return (
        <div className="sm:flex sm:items-center sm:space-x-8">
        <label htmlFor="" className="block text-sm font-medium text-gray-600">
        {label}
        </label>
        <div className="relative mt-2 sm:mt-0 sm:flex-1">
    <input
        type={type}
    className="block w-full px-4 border py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
    onChange={onChange}
    />
    </div>
    </div>
);
};

export default InputField;
