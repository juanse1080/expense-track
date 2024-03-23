import type { StoryObj } from '@storybook/angular';

export interface withNgContentOptions {
  attrs?: string;
}

const defaultNgContentOptions: withNgContentOptions = {
  attrs: '',
};

export const withNgContent =
  <TArgs = Record<string, unknown>>(
    selector: string,
    children: string,
    { attrs }: withNgContentOptions = defaultNgContentOptions
  ) =>
  ({ args }: StoryObj<TArgs>): StoryObj<TArgs> => ({
    args,
    render: (props: any) => {
      const keys = Object.keys(props);

      const argsAttrs = keys.reduce((acc, curr) => {
        let value = props[curr];
        if (typeof value === 'string') value = `'${value}'`;
        return `[${curr}]="${value}" ${acc}`;
      }, '');

      return {
        template: `<${selector} ${argsAttrs} ${attrs}>${children}</${selector}>`,
      };
    },
  });
