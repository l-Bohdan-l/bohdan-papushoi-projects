import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../redux/contacts/selectors/selectors";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/contactsApi";
import { ToastContainer, toast } from "react-toastify";
import { changeFilterValue } from "../../redux/contacts/filterSlice";
import { ContactList } from "../../components/Contacts/ContactList/ContactList";
import { ColorRing } from "react-loader-spinner";
import { Filter } from "../../components/Contacts/Filter/Filter";
import { ContactForm } from "../../components/Contacts/ContactForm/ContactForm";

function ContactPage() {
  const dispatch = useDispatch();
  const filterValue = useSelector(filterSelector);

  const { data: contacts, isSuccess } = useGetContactsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [
    addContact,
    { data, error: contactError, isSuccess: addContactSuccess },
  ] = useAddContactMutation();

  const createContact = async (name, number) => {
    const dublicateContact = contacts.some((checkedContact) => {
      return checkedContact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateContact) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name,
      number,
    };

    try {
      await addContact(contact);
    } catch (error) {
      console.log("error", error);
      toast.error(contactError.message);
    }
  };

  const changeFilter = (e) => {
    dispatch(changeFilterValue(e.currentTarget.value));
  };

  const changeFilterContacts = () => {
    if (!contacts) {
      return;
    }
    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((a, b) => b.id - a.id);
  };

  const filteredContacts = changeFilterContacts();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Phonebook</h1>
      <ContactForm
        onSubmit={createContact}
        // isSuccess={addContactSuccess}
      />
      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <Filter value={filterValue} onChange={changeFilter} />
      {!isSuccess && (
        <ColorRing
          wrapperStyle={{
            display: "block",
            margin: "0 auto",
          }}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {contacts && isSuccess && (
        <ContactList
          contacts={filteredContacts}
          // onDelete={handleDeleteContact}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ContactPage;
