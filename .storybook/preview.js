import '../src/theme/index.css';
import { StateProvider } from '../src/actions/state-context';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
	(Story) => (
		<StateProvider>
			<Story />
		</StateProvider>
	),
];
