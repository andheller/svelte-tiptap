// import { SvelteNodeViewRenderer } from "svelte-tiptap";
import { SvelteNodeViewRenderer } from "$lib/blocks/svelte-block/SvelteNodeViewRenderer";
import { Node, mergeAttributes } from "@tiptap/core";
import Block from "$lib/blocks/Block.svelte";
// import Counter from "$lib/blocks/Counter.svelte";
// import Editable from "$lib/blocks/Editable.svelte";
import ReplBlock from "$lib/blocks/ReplBlock.svelte";
// import TableBlock from "$lib/blocks/TableBlock.svelte";

/*
We maybe will need to create a seperate block for inline or block
Can maintain seperate lists.

We will want to have the command list be dynamic at the workspace level.
*/

export const SvelteBlockExtension = Node.create({
  name: "SvelteBlockComponent",
  group: "block",
  atom: true,
  draggable: false,
  inline: false,
  addAttributes() {
    return {
      yid: {
        default: "block001",
      },
    };
  },

  parseHTML() {
    return [{ tag: "svelte-block" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["svelte-repl-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return SvelteNodeViewRenderer(Block);
  },
});

// export const SvelteCounterExtension = Node.create({
//   name: "SvelteCounterComponent",
//   group: "block",
//   atom: true,
//   draggable: true,
//   inline: false,

//   addAttributes() {
//     return {
//       count: {
//         default: 0,
//       },
//     };
//   },

//   parseHTML() {
//     return [{ tag: "svelte-counter-component" }];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ["svelte-counter-component", mergeAttributes(HTMLAttributes)];
//   },

//   addNodeView() {
//     return SvelteNodeViewRenderer(Counter);
//   },
// });

// export const SvelteEditableExtension = Node.create({
//   name: "SvelteEditableComponent",
//   group: "block",
//   content: "inline*",

//   parseHTML() {
//     return [{ tag: "svelte-editable-component" }];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ["svelte-editable-component", mergeAttributes(HTMLAttributes), 0];
//   },

//   addNodeView() {
//     return SvelteNodeViewRenderer(Editable);
//   },
// });

export const SvelteReplExtension = Node.create({
  name: "SvelteReplComponent",
  group: "block",
  atom: true,
  draggable: false,
  inline: false,
  addAttributes() {
    return {
      yid: {
        default: "repl001",
      },
    };
  },

  parseHTML() {
    return [{ tag: "svelte-repl-component" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["svelte-repl-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return SvelteNodeViewRenderer(ReplBlock);
  },
});

// export const SvelteTableExtension = Node.create({
//   name: "SvelteTableComponent",
//   group: "block",
//   atom: true,
//   draggable: false,
//   inline: false,
//   addAttributes() {
//     return {
//       yid: {
//         default: "table001",
//       },
//     };
//   },

//   parseHTML() {
//     return [{ tag: "svelte-table-component" }];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ["svelte-table-component", mergeAttributes(HTMLAttributes)];
//   },

//   addNodeView() {
//     return SvelteNodeViewRenderer(TableBlock);
//   },
// });
