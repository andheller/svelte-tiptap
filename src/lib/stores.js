import { writable } from 'svelte/store';

export const slashVisible = writable(false);
export const slashItems = writable([]);
export const slashLocaltion = writable({ x: 0, y: 0, height: 0 });
export const slashProps = writable({ editor: null, range: null });
export const desktopMenu = writable(true);
export const components = writable([]);
export const editorWidth = writable(0);
