import React, { ForwardRefRenderFunction } from 'react';
import { StyledInput, ErrorMessage } from './styles';

// Definindo o tipo para as propriedades do componente Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: { message?: string };
}

// Utilizando ForwardRefRenderFunction para tipar corretamente o componente e a ref
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, ...rest }, ref) => {
   return (
      <div>
         <StyledInput ref={ref} {...rest} />
         {error && error.message && <ErrorMessage>{error.message}</ErrorMessage>}
      </div>
   );
};

export default React.forwardRef(Input);
