import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const getFilteredContacts = (contacts, valueFilter) =>
	contacts.filter((contact) =>
		contact.name.toLowerCase().includes(valueFilter)
	);


const ContactList = () => {

	const contacts = useSelector(selectContacts);
	const valueFilter = useSelector(selectNameFilter);
	const filteredContacts = getFilteredContacts(contacts, valueFilter);

	return (
		<ul className={styles.contactList}>
			{filteredContacts.map(({ id, number, name }) => (
				<Contact
					key={id}
					id={id}
					number={number}
					name={name}
				/>
			))}
		</ul>
	);
};

export default ContactList;