import { Card } from './components/card/card.jsx';
import { CVHeader } from './components/cv-header/cv-header.jsx';
import { Formation } from './components/formation/formation.jsx';
import { Skills } from './components/skills/skills.jsx';
import style from './style.module.css';
import { Projects } from './components/projects/projects.jsx';
import { Contact } from './components/contact/contact.jsx';

function App() {
	return (
		<div className={style.main}>
			<CVHeader />
			<Card title={'FORMACIÓN'}>
				<Formation />
			</Card>
			<Card title={'PROYECTOS'}>
				<Projects />
			</Card>
			<Card title={'HABILIDADES'}>
				<Skills />
			</Card>
			<Card title={'CONTACTO'}>
				<Contact />
			</Card>
		</div>
	);
}

export default App;
