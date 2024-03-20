import type { StoryObj } from '@storybook/angular';

export const withNgContent =
  <TArgs = Record<string, unknown>>(selector: string) =>
  ({ args }: StoryObj<TArgs>): StoryObj<TArgs> => ({
    args,
    render: (props: any) => {
      const keys = Object.keys(props);

      const attrs = keys.reduce((acc, curr) => {
        let value = props[curr];
        if (typeof value === 'string') value = `'${value}'`;
        return `[${curr}]="${value}" ${acc}`;
      }, '');

      return {
        template: `<${selector} ${attrs}>Example text</${selector}>`,
      };
    },
  });
