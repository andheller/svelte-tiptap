<script>
	import Editor from '$lib/editor/index.svelte';
	import content from './content.json';
	let title = 'Svelte Tiptap Notion Clone (Svnotion?)';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="Svelte Tiptap Notion Clone" />
	<meta
		property="og:site_name"
		content="Building a Notion editor clone with Svelte, Tiptap and Tailwind."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://svelte-tiptap.vercel.app/notionClone.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-3xl p-2 m-auto my-16">
	<h1
		contenteditable
		bind:textContent={title}
		class="focus:outline-none text-4xl font-semibold mb-4"
	/>
	<Editor {content} />
</div>

<style>
	h1:empty::before {
		content: 'Title';
		color: #adb5bd;
	}
</style>
