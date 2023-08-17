import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

import { lowlight } from 'lowlight/lib/core';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Typography from '@tiptap/extension-typography';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import YouTube from './custom/youtube';
import suggestion from './suggestion';
import Slash from './slash-command';
// import { SvelteBlockExtension } from "./SvelteExtension";
// import { SvelteBlockExtension, SvelteReplExtension } from "./SvelteExtension";
// import { SvelteReplExtension, SvelteTableExtension, SvelteBlockExtension } from "./SvelteExtension";

export const defaultExtensions = [
	StarterKit.configure({
		history: false,
		codeBlock: false
	}),
	Underline,
	Typography,
	TaskList,
	TaskItem,
	TextAlign,
	Placeholder,
	Image,
	Link,
	// SvelteBlockExtension,
	// SvelteReplExtension,
	// SvelteTableExtension,
	YouTube,
	CodeBlockLowlight.configure({
		lowlight
	}),
	Slash.configure({
		suggestion
	})
];
