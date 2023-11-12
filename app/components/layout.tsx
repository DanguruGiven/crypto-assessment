import { CSSProperties, FC, HTMLAttributes } from 'react';

interface divPropType extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
};

type columnClassName = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '9' | '10' | '11' | '12';

export const Container: FC<divPropType> = (props) => {
    const { className = 'container', style, children } = props;
    return (
        <>
            <div className={className} style={style} {...props}>{children}</div>
        </>
    );
};

// Warning: Container: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

// Container.defaultProps = {
//     className: 'container',
// };

export const Row: FC<divPropType> = (props) => {
    const { className, children } = props;
    return (
        <>
            <div className={`row ${className}`} {...props}>{children}</div>
        </>
    );
};

interface colPropTypes extends divPropType {
    sm?: columnClassName; 
    md?: columnClassName; 
    lg?: columnClassName; 
    xl?: columnClassName; 
};

export const Col: FC<colPropTypes> = (props) => {
    const { className, children, sm = '12', md = '12', lg = '12', xl = '12' } = props;
    return (
        <>
            <div className={`col ${className} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl}`} {...props}>{children}</div>
        </>
    );
};