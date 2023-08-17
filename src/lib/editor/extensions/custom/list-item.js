import { mergeAttributes, Node } from "@tiptap/core";

export const ListItem = Node.create({
  name: "listItem",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  content: "paragraph block*",
  draggable: true,

  defining: true,

  parseHTML() {
    return [
      {
        tag: "li",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "li",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
    };
  },
});

export default ListItem;
