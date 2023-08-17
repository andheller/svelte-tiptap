import { mergeAttributes, Node, nodePasteRule } from "@tiptap/core";

const YOUTUBE_REGEX =
  /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(.+)?$/;
const YOUTUBE_REGEX_GLOBAL =
  /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(.+)?$/g;

const isValidYoutubeUrl = (url) => {
  return url.match(YOUTUBE_REGEX);
};

export const getEmbedURLFromYoutubeURL = (options) => {
  const { url, controls, startAt } = options;

  // if is already an embed url, return it
  if (url.includes("/embed/")) {
    return url;
  }

  // if is a youtu.be url, get the id after the /
  if (url.includes("youtu.be")) {
    const id = url.split("/").pop();

    if (!id) {
      return null;
    }
    return `https://www.youtube-nocookie.com/embed/${id}`;
  }

  const videoIdRegex = /v=([-\w]+)/gm;
  const matches = videoIdRegex.exec(url);

  if (!matches || !matches[1]) {
    return null;
  }

  let outputUrl = `https://www.youtube-nocookie.com/embed/${matches[1]}`;

  const params = [];

  if (!controls) {
    params.push("controls=0");
  }

  if (startAt) {
    params.push(`start=${startAt}`);
  }

  if (params.length) {
    outputUrl += `?${params.join("&")}`;
  }

  return outputUrl;
};

export const Youtube = Node.create({
  name: "youtube",

  addOptions() {
    return {
      addPasteHandler: true,
      allowFullscreen: false,
      controls: true,
      HTMLAttributes: { class: "aspect-video max-width-content w-full" },
      inline: false,
      nocookie: true,
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? "inline" : "block";
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      start: {
        default: 0,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-youtube-video] iframe",
      },
    ];
  },

  addCommands() {
    return {
      setYoutubeVideo:
        (options) =>
        ({ commands }) => {
          if (!isValidYoutubeUrl(options.src)) {
            return false;
          }

          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addPasteRules() {
    if (!this.options.addPasteHandler) {
      return [];
    }

    return [
      nodePasteRule({
        find: YOUTUBE_REGEX_GLOBAL,
        type: this.type,
        getAttributes: (match) => {
          return { src: match.input };
        },
      }),
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const embedUrl = getEmbedURLFromYoutubeURL({
      url: HTMLAttributes.src,
      controls: this.options.controls,
      nocookie: this.options.nocookie,
      startAt: HTMLAttributes.start || 0,
    });

    HTMLAttributes.src = embedUrl;

    return [
      "div",
      { "data-youtube-video": "" },
      [
        "iframe",
        mergeAttributes(
          this.options.HTMLAttributes,
          {
            allowfullscreen: this.options.allowFullscreen,
          },
          HTMLAttributes
        ),
      ],
    ];
  },
});

export default Youtube;
