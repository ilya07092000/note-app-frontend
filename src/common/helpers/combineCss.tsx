export default (classNames: string[]) => classNames.filter((name) => !!name).join(' ');
