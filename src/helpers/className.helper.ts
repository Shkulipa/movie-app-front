type TCn = (string | undefined)[];

const classNameHelper = (classNames: TCn) =>
	classNames.filter(className => Boolean(className)).join(' ');

export default classNameHelper;