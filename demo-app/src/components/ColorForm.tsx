import React, { useState, useEffect, useRef } from 'react';

interface ColorFormProps {
    onSubmitColor: (color: string) => void;
    buttonText?: string;

}

export const ColorForm = ({ onSubmitColor, buttonText}: ColorFormProps) => {
    
    const [color, setColor] = useState('');

    const colorInput = useRef<HTMLInputElement>(null); //React.createRef<HTMLInputElement>();

    useEffect(() => {
        if (colorInput.current) {
            colorInput.current.focus();
        }
    });
    const submitColor = () => {
        onSubmitColor(color);
        setColor('');
    };

        return <form>
                <div>
                    <label htmlFor="color-input">New Color</label>
                    <input type="type" id="color-input" name="color" ref={colorInput}
                        value={color} onChange={e=> setColor(e.target.value)} />
                </div>
                <button type="button" onClick={submitColor}>{buttonText}</button>
        </form>
}