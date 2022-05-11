import { slashVisible, slashItems, slashLocaltion, slashProps } from '$lib/stores';

export default {
	items: ({ query }) => {
		return [
			{
				title: 'To Dos',
				subtitle: 'Create a to do list with checkboxes',
				command: ({ editor, range }) => {
					editor.commands.deleteRange(range);
					editor.commands.insertContent(
						'<ul data-type="taskList"><li data-checked="false"><li>&#8203</li></ul>'
					);
				}
			},
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
				title: 'Bullet List',
				subtitle: 'Pew pew pew',
				command: ({ editor, range }) => {
					editor.commands.deleteRange(range);
					editor.commands.toggleBulletList();
				}
			},
			{
				title: 'Numbered List',
				subtitle: '1, 2, 3, 4...',
				command: ({ editor, range }) => {
					editor.commands.deleteRange(range);

					editor.commands.toggleOrderedList();
				}
			}
		]
			.filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
			.slice(0, 10);
	},

	render: () => {
		return {
			onStart: (props) => {
				let editor = props.editor;
				let range = props.range;
				let location = props.clientRect();
				slashProps.set({ editor, range });
				slashVisible.set(true);
				slashLocaltion.set({ x: location.x, y: location.y, height: location.height });
				slashItems.set(props.items);
			},

			onUpdate(props) {
				slashItems.set(props.items);
			},

			onKeyDown(props) {
				if (props.event.key === 'Escape') {
					slashVisible.set(false);
					return true;
				}
			},

			onExit() {
				slashVisible.set(false);
			}
		};
	}
};
