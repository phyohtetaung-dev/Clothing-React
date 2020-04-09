import React from 'react';
import CustomButtonContainer from './custom-button.styles.jsx'

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer className="custom-button" {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;