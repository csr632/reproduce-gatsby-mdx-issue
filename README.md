# reproduce gatsbyjs + mdx issue

1. `yarn install`

2. `yarn run start`

3. checkout `/aaa` and `/bbb` and `/ccc`.

If there is no bug:

- `/aaa` should display `comp1`
- `/bbb` should display `comp2`
- `/ccc` should not work because `Comp` is not imported
