/* eslint-disable no-unused-vars */
declare module '*.svg' {
	import { ReactElement, SVGProps } from 'react';
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
declare module '*.svg?inline' {
	import { ReactElement, SVGProps } from 'react';
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
