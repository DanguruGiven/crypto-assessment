import { HTMLAttributes } from 'react';

interface textPropType extends HTMLAttributes<HTMLParagraphElement> {
    label: string | number;
};

export const Text = (props: textPropType) => {
    const { label = 'Text' } = props;
    return (
        <>
            <p {...props}>{label}</p>
        </>
    );
};