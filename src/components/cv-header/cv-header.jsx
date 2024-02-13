import { Logo } from '../logo/logo';
import style from './style.module.css';

export function CVHeader() {
	const cambiarTema = () => {
		// Obtén el valor actual del atributo data-theme
		const htmlElement = document.documentElement;
		let currentTheme = htmlElement.getAttribute('data-theme');
		// Cambia el tema dependiendo del tema actual
		const newTheme = currentTheme === 'dracula' ? 'cupcake' : 'dracula';
		const iconos = document.querySelectorAll('.ionicon');
		// Verifica el tema actual y aplica la clase correspondiente a los iconos
		if (currentTheme === 'dracula') {
			iconos.forEach((icono) => {
				icono.classList.remove('ionicon-light');
			});
		} else {
			iconos.forEach((icono) => {
				icono.classList.add('ionicon-light');
			});
		}

		const logos = document.querySelectorAll('.logo');
		// Verifica el tema actual y aplica la clase correspondiente a los iconos
		if (currentTheme === 'dracula') {
			logos.forEach((icono) => {
				icono.classList.add('logo-white');
				icono.classList.remove('logo-dark');
			});
		} else {
			logos.forEach((icono) => {
				icono.classList.remove('logo-white');
				icono.classList.add('logo-dark');
			});
		}

		// Establece el nuevo tema
		htmlElement.setAttribute('data-theme', newTheme);
	};

	return (
		<>
			<div className={style.presentationWrapper}>
				<div className={style.topSection}>
					<div className={style.buttonWrapper}>
						<label className='swap swap-rotate'>
							{/* this hidden checkbox controls the state */}
							<input type='checkbox' onClick={cambiarTema} />

							{/* sun icon */}
							<svg
								className='swap-on fill-current w-10 h-10'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
							</svg>

							{/* moon icon */}
							<svg
								className='swap-off fill-current w-10 h-10'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'>
								<path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
							</svg>
						</label>
					</div>
				</div>

				<div className={style.logoWrapper}>
					<div className={style.divLogo}>
						<Logo />
					</div>
					<div className={style.mainInfoWrapper}>
						<div className={style.title}>
							<h1 className='titleMarginTop text-6xl font-bold '>
								Paula Cubero
							</h1>
						</div>
						<div className={'flex items-center gap-4 '}>
							<h2 className='text-secondary hover:text-primary'>
								paulacubero.e@gmail.com
							</h2>
							<a
								className={
									'p-2 flex bg-neutral-200 dark:bg-neutral-700 rounded-full relative before:absolute before:inset-0 dark:before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 text-sm text-white transition-colors'
								}
								href='./archivo/CV_tecnologias_PaulaCuberoEncinas.pdf'
								target='_blank'>
								CV
							</a>
							<nav class='flex gap-4'>
								{' '}
								<a
									href='https://github.com/paulacubero'
									target='_blank'
									rel='noopener noreferrer'
									class='p-2 flex bg-neutral-200 dark:bg-neutral-700 rounded-full relative before:absolute before:inset-0 dark:before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 text-sm hover:text-white transition-colors'
									title='Go to Github'>
									{' '}
									<span class='sr-only'>github</span>{' '}
									<svg
										stroke-width='1.5'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										color='currentColor'
										class='w-5 h-5 dark:text-gray-300 text-neutral-600'>
										{' '}
										<path
											d='M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'></path>{' '}
									</svg>{' '}
								</a>{' '}
								<a
									href='https://www.linkedin.com/in/paula-cubero-encinas/'
									target='_blank'
									rel='noopener noreferrer'
									class='p-2 flex bg-neutral-200 dark:bg-neutral-700 rounded-full relative before:absolute before:inset-0 dark:before:bg-white/20 before:bg-neutral-400/20 z-[2] before:rounded-full before:scale-0 before:transition-transform before:hover:scale-100 text-sm hover:text-white transition-colors'
									title='Visit LinkedIn'>
									{' '}
									<span class='sr-only'>linkedin</span>{' '}
									<svg
										stroke-width='2'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										color='currentColor'
										class='w-5 h-5 dark:text-gray-300 text-neutral-600'>
										{' '}
										<path
											d='M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'></path>{' '}
										<path
											d='M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'></path>{' '}
									</svg>{' '}
								</a>{' '}
							</nav>{' '}
						</div>
						<div>
							<h3>
								Programadora Junior con muchas ganas de seguir aprendiedo.
							</h3>
						</div>
					</div>
				</div>
			</div>
			<hr className='px-2' />
		</>
	);
}
