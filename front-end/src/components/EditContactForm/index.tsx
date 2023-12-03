import { useState } from 'react';
import { ModalOverlay, ModalContainer } from './styles'; // Ajuste o caminho conforme necessário
import Button from '../Button';
import { StyledInput } from "../../components/Input/styles";
import { Content } from '../../pages/HomePage/styles';

interface Contact {
    fullName: string;
    email: string;
    telephone: string;
}

interface EditContactFormProps {
    contact: Contact;
    onSave: (contact: Contact) => void;
    onCancel: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ contact, onSave, onCancel }) => {
   const [formData, setFormData] = useState<Contact>({ ...contact });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSave(formData);
   };

   return (
      <ModalOverlay>
         <ModalContainer>
            <Content>
               <form onSubmit={handleSubmit}>
                  <StyledInput type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                  <StyledInput type="text" name="email" value={formData.email} onChange={handleChange} />
                  <StyledInput type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
                  <Button type="submit">Salvar</Button>
                  <Button onClick={onCancel}>Cancelar</Button>
               </form>
            </Content>
         </ModalContainer>
      </ModalOverlay>
   );
};

export default EditContactForm;