import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

function SelectUser() {

	const { userId, setUserId } = useContext(UserContext);

	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};

	
	return (
		<select className={styles['select']} name="user" id="user" value={userId} onChange={changeUser}>
			<option value="1">Личные записи</option>
			<option value="2">Рабочие моменты</option>
			<option value="3">Важное</option>
			<option value="4">Куча дел</option>
		</select>
	);
}

export default SelectUser;