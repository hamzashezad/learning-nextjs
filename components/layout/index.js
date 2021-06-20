import Navigation from '../navigation';
import styles from './layout.module.css';

export default function Layout(props) {
	return (<>
		<Navigation />

		{props.children}
	</>);
}
