<script>
	//This is the component for the hover drag handles.

	let hover_x, hover_y;
	let hover_menu_visible = false;

	function handlePointerover(e) {
		if (e.target.getAttribute('data-editor')) return (hover_menu_visible = false);

		const path = e.path[0];

		const el = get_element(path);

		const rect = el.getBoundingClientRect();
		const x = rect.left - 50;
		const y = rect.top + window.scrollY;

		hover_x = x;
		hover_y = y;
		hover_menu_visible = true;
	}
	function get_element(el) {
		if (/^H[1-6]|LI$/.test(el.tagName)) return el;
		if (el.parentNode.tagName === 'LI') return el.parentNode;
		if ((el.parentNode.parentNode.tagName = 'LI')) return el.parentNode.parentNode;
		if ((el.parentNode.parentNode.parentNode.tagName = 'LI'))
			return el.parentNode.parentNode.parentNode;

		return el;
	}
</script>

<div on:pointerover={handlePointerover} />

<div
	class="absolute px-4 {hover_menu_visible ? 'visible' : 'hidden'}"
	style="top:{hover_y | '0'}px; left:{hover_x | '0'}px"
>
	<div class="text-lg bg-gray-50 border rounded w-8 h-8 text-center cursor-grab">⋮⋮</div>
</div>

<style>
	/* 
  This is the css version. This wouldn't be as accessible, so we want to change to a js version.
  p draggable on the click background or selected. 

  :global([draggable="true"]:hover:after) {
    content: "";
    display: block;
    height: 25px;
    width: 25px;
    cursor: grab;
  }

  :global([draggable="true"]) {
    position: relative;
  }

  :global(p, li) {
    position: relative;
  }
  :global(p:after, p[draggable="true"]:after) {
    content: "";
    display: block;
    height: 25px;
    width: 25px;
    position: absolute;
    left: -25px;
    top: 0px;
    cursor: grab;
  }

  :global(li p:after, li p[draggable="true"]:after) {
    left: -55px;
    width: 55px;
  }
  :global(ul[data-type="taskList"] p:after, ul p[draggable="true"]:after) {
    left: -25px;
    width: 25px;
  }

  :global(li:after) {
    content: "";
    display: block;
    height: 30px;
    width: 30px;
    position: absolute;
    left: -50px;
    top: 0px;
    cursor: grab;
  }
  :global(p:hover:after, li p:hover:after, ul[data-type="taskList"]
      p:hover:after) {
    content: "⋮⋮";
    pointer-events: auto;
    padding: 3px;
    z-index: 10;
    background: #0301;
  } */
</style>
