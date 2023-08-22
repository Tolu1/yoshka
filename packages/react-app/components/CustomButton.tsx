import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
    color?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, text, color = 'teal' }) => {
    return (
        <button
            type="button"
            className={`inline-flex w-full justify-center rounded-md bg-${color}-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${color}-500 sm:w-auto`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;
