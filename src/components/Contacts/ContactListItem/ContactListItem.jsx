import { ColorRing } from "react-loader-spinner";
import { useDeleteContactMutation } from "../../../redux/contacts/contactsApi";

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  return (
    <>        
          <span>
          {name} : {number}
        </span>
        <button
          type="button"
          disabled={isSuccess}
          onClick={() => deleteContact(id)}
        >
          {isSuccess ? <ColorRing
            height={12}
            width={12}
          /> : "x"}
          
        </button>
    </>
  );
};