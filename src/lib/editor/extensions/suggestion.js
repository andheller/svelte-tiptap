import Slash from '../Slash.svelte';
import tippy from 'tippy.js';

export default {
	items: ({ query }) => {
		return [
			{
				title: 'Heading 1',
				subtitle: 'BIG heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
				}
			},
			{
				title: 'Heading 2',
				subtitle: 'Less Big heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run();
				}
			},
			{
				title: 'Heading 3',
				subtitle: 'Medium big heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run();
				}
			},
			{
				title: 'To Dos',
				subtitle: 'Create a to do list with checkboxes',
				command: ({ editor, range }) => {
					editor.chain().deleteRange(range).focus().toggleTaskList().run();
				}
			}
		]
			.filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
			.slice(0, 10);
	},

	render: () => {
		let component, popup;
		let selected = false;

		return {
			onStart: (props) => {
				let element = document.createElement('div');
				component = new Slash({
					target: element,
					props: {
						editor: props.editor,
						range: props.range,
						items: props.items
					}
				});

				popup = tippy('body', {
					getReferenceClientRect: props.clientRect,
					appendTo: () => document.body,
					content: element,
					showOnCreate: true,
					interactive: true,
					trigger: 'manual',
					placement: 'bottom-start'
				});
			},

			onUpdate(props) {
				component.$set({
					editor: props.editor,
					range: props.range,
					items: props.items
				});
				if (!props.clientRect) {
					return;
				}

				popup[0].setProps({
					getReferenceClientRect: props.clientRect
				});
			},

			onKeyDown(props) {
				if (props.event.key === 'Escape') {
					popup[0].hide();
					return true;
				}
				if (props.event.key === 'Enter') {
					selected = true;
					props.event.preventDefault();
					return true;
				}
			},

			onExit() {
				popup[0].destroy();
				component.$destroy();
			}
		};
	}
};
