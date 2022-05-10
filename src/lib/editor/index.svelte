<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';
	import StarterKit from '@tiptap/starter-kit';
	import { Editor } from '@tiptap/core';
	import Placeholder from '@tiptap/extension-placeholder';
	import TaskList from '@tiptap/extension-task-list';
	import TaskItem from '@tiptap/extension-task-item';

	import suggestion from './suggestion';
	import SlashCommands from './slash-command';
	import Slash from './Slash.svelte';
	import { slashVisible, slashItems, slashProps, editorWidth } from '$lib/stores';

	let selectedIndex = 0;
	$: selectedIndex = $slashVisible ? selectedIndex : 0;
	$: $editorWidth = w ? w : '0';

	function handleKeydown(event) {
		if (!$slashVisible) return;
		if (event.key === 'ArrowUp') {
			event.preventDefault();

			upHandler();
			return true;
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();

			downHandler();
			return true;
		}

		if (event.key === 'Enter') {
			event.preventDefault();
			enterHandler();
			return true;
		}

		return false;
	}

	function upHandler() {
		selectedIndex = (selectedIndex + $slashItems.length - 1) % $slashItems.length;
	}

	function downHandler() {
		selectedIndex = (selectedIndex + 1) % $slashItems.length;
	}

	function enterHandler() {
		selectItem(selectedIndex);
	}
	function selectItem(index) {
		const item = $slashItems[index];

		if (item) {
			//editor.chain().focus().toggleBold().run();
			//return console.log(item);
			let range = $slashProps.range;
			item.command({ editor, range });
		}
	}

	let element, editor, w;

	let content = {};

	onMount(() => {
		if (browser) {
			content = '<h1>Demo</h1> <p>This is a demo!</p><youtube />';
			editor = new Editor({
				element: element,
				editorProps: {
					attributes: {
						class:
							'prose prose sm:prose-xl lg:prose-2xl max-w-xl m-auto focus:outline-none flex flex-col items-center px-3 md:px-0'
					}
				},
				extensions: [
					StarterKit,
					Placeholder,
					TaskList,
					TaskItem,
					SlashCommands.configure({
						suggestion
					})
				],
				content,
				onTransaction: () => {
					// force re-render so `editor.isActive` works as expected
					editor = editor;
				},
				onUpdate: ({ editor }) => {
					// send the content to an API here
				}
			});
		}
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="prose-slate" bind:clientWidth={w}>
	<div bind:this={element} on:keydown|capture={handleKeydown} />
</div>

<Slash {selectedIndex} />

<style>
	:global(h1, h2, h3, h4, h5, h6, p, ul, ol) {
		width: 100%;
	}

	:global(.ProseMirror p.is-empty::before) {
		content: "Type '/' for commands";
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h1.is-empty::before) {
		content: 'Heading 1';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h2.is-empty::before) {
		content: 'Heading 2';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h3.is-empty::before) {
		content: 'Heading 3';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h4.is-empty::before) {
		content: 'Heading 4';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h5.is-empty::before) {
		content: 'Heading 5';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h6.is-empty::before) {
		content: 'Heading 6';
		color: #adb5bd;
		float: left;
		height: 0;
	}

	:global ul[data-type='taskList'] {
		list-style: none;
		padding-left: 2px;
	}
	:global ul[data-type='taskList'] li {
		display: flex;
		align-items: top;
	}
	:global ul[data-type='taskList'] li p {
		margin: 0;
	}
	:global ul[data-type='taskList'] li label {
		padding-right: 18px;
	}
	:global ul[data-type='taskList'] li label input {
		border-radius: 0.25rem;
		border-color: #cbd5e1;
	}
</style>
