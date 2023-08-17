<script>
  export let content_editor;
</script>

{#if content_editor}
  {#if content_editor.isActive("youtube")}
    <div
      class="border border-gray-200 shadow bg-white p-2 rounded-lg flex flex-wrap"
    >
      {JSON.stringify(
        content_editor.getAttributes(
          content_editor.view.state.selection.node.type.name
        )
      )}
      <br />
      <button on:click={content_editor.commands.deleteSelection()}
        >Remove</button
      >
    </div>
  {:else if content_editor.isActive("SvelteReplComponent")}
    <div />
  {:else if content_editor.isActive("SvelteTableComponent")}
    <div />
  {:else}
    <div
      class="border border-gray-200 shadow bg-white p-2 rounded-lg flex flex-wrap"
    >
      <button
        on:click={() => content_editor.chain().focus().toggleBold().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'bold'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
          /></svg
        >
      </button>
      <button
        on:click={() => content_editor.chain().focus().toggleItalic().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'italic'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"
          /></svg
        >
      </button>
      <button
        on:click={() => content_editor.chain().focus().toggleUnderline().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'underline'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z"
          /></svg
        >
      </button>
      <button
        on:click={() =>
          content_editor.chain().focus().toggleHeading({ level: 1 }).run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'heading',
          { level: 1 }
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0H24V24H0z" /><path
            d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"
          /></svg
        >
      </button>
      <button
        on:click={() =>
          content_editor.chain().focus().toggleHeading({ level: 2 }).run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'heading',
          { level: 2 }
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0H24V24H0z" /><path
            d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"
          /></svg
        >
      </button>

      <button
        on:click={() =>
          content_editor.chain().focus().toggleHeading({ level: 3 }).run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'heading',
          { level: 3 }
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0H24V24H0z" /><path
            d="M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"
          /></svg
        >
      </button>
      <button
        on:click={() => content_editor.chain().focus().setParagraph().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'paragraph'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"
          /></svg
        >
      </button>
      <button
        on:click={() => content_editor.chain().focus().toggleBulletList().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'bulletList'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
          /></svg
        >
      </button>
      <button
        on:click={() =>
          content_editor.chain().focus().toggleOrderedList().run()}
        class="p-1 m-px w-8 h-8 rounded hover:bg-gray-100 {content_editor.isActive(
          'orderedList'
        )
          ? 'bg-gray-200 hover:bg-gray-200 text-gray-800'
          : ''}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w"
          ><path fill="none" d="M0 0h24v24H0z" /><path
            d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
          /></svg
        >
      </button>
    </div>
  {/if}
{/if}
