import { ContactListItem } from "../ContactListItem/ContactListItem";
import { ContactListStyled, ContactListItemStyled } from "./ContactList.styled";


export function ContactList({ contacts,
  // onDelete
}) {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactListItemStyled key={contact.id}>
          <ContactListItem {...contact}
            // onDelete={onDelete}
          />              
        </ContactListItemStyled>  
      ))}
    </ContactListStyled>
  );
};

