export function getLastPath(path: string): string {
	return path.split('/').filter(Boolean).pop() || '';
}
