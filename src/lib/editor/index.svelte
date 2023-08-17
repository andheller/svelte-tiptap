<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { Editor } from '@tiptap/core';
	import BubbleMenu from '@tiptap/extension-bubble-menu';
	import Collaboration from '@tiptap/extension-collaboration';
	import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
	import { defaultExtensions } from './extensions';
	import Toolbar from './Toolbar.svelte';
	import { get_color, get_name } from '$lib/utils';
	import * as Y from 'yjs';
	import YProvider from 'y-partykit/provider';
	import * as awarenessProtocol from 'y-protocols/awareness.js';

	let ydoc;
	let element, toolbar, component, content_editor;

	let name = get_name(); //get a fake name, but could get real name here.
	let color = get_color();

	function newYdoc() {
		if (!browser) return;
		if (ydoc) ydoc.destroy();
		if (!element) return;

		ydoc = new Y.Doc();

		const providerURL = 'party.andheller.partykit.dev';

		const extensions = [
			...defaultExtensions,
			BubbleMenu.configure({
				element: toolbar
			}),
			Collaboration.configure({
				document: ydoc
			}),
			CollaborationCursor.configure({
				provider: new YProvider(providerURL, 'svnotion', ydoc, {
					awareness: new awarenessProtocol.Awareness(ydoc)
				}),
				user: {
					name,
					color
				}
			})
		];

		toolbar = document.createElement('div');
		component = new Toolbar({
			target: toolbar
		});

		element.innerHTML = '';
		content_editor = new Editor({
			element,
			editorProps: {
				attributes: {
					'data-editor': 'true',
					class: 'focus:outline-none flex flex-col items-stretch'
				}
			},
			extensions,
			onTransaction: () => {
				content_editor = content_editor;
			}
		});
		component.$set({ content_editor });
	}

	onMount(async () => {
		newYdoc();
	});

	onDestroy(() => {
		if (component) component.$destroy();
		if (content_editor) content_editor.destroy();
	});
</script>

<div class="loading relative prose prose-lg prose-gray">
	<div bind:this={element} />
</div>

<style>
	:global(h1, h2, h3, h4, h5, h6, p, ul, li) {
		width: 100%;
	}

	:global(ul, ol) {
		margin: 0px !important;
	}

	:global(.ProseMirror) {
		position: static !important;
	}
	:global(.ProseMirror p.is-empty::before) {
		content: "Type '/' for commands";
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.loading) {
		animation: fadeIn 0.15s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
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
	:global(.ProseMirror p) {
		margin-top: 0px;
	}
	:global(ul[data-type='taskList']) {
		list-style: none;
		padding-left: 2px;
	}
	:global(ul[data-type='taskList'] li) {
		display: flex;
		align-items: top;
	}
	:global(ul[data-type='taskList'] li label) {
		padding-right: 12px;
	}
	:global(ul, ol) {
		margin-top: 0px !important;
	}
	:global(li p, li p) {
		margin-top: 0px !important;
		margin-bottom: 4px !important;
	}

	:global(ul[data-type='taskList'] li label input) {
		border-radius: 0.25rem;
		border-color: #cbd5e1;
	}
	:global(.max-width-content) {
		max-width: var(--content-width);
	}
	:global(ul[data-type='taskList'] li div) {
		margin-bottom: 0;
	}

	:global(span.collaboration-cursor__caret.ProseMirror-widget) {
		position: relative;
		border: 1px solid;
	}

	:global(.collaboration-cursor__label) {
		position: absolute;
		top: -20px;
		left: -1px;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		padding: 0px 7px;
	}
</style>
