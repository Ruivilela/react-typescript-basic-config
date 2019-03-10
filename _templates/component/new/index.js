const changeCase = require('change-case');

module.exports = {
  prompt: ({ prompter: { prompt }, args }) =>
    prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What’s the name of this component folder?',
        skip: !!args.name || !!args.n,
        validate: name => name.length > 2
      },
      {
        type: 'input',
        name: '_path',
        message: `Folder's path?`,
        skip: !!args.name || !!args.n,
        result: name => name
      }
    ]).then(
      options => {
        const { _path, name } = options;

        return {
          ...options,
          path: `${_path}/${name}`,
          root: 'src',
          _componentName: changeCase.pascal(name)
        };
      }
    )
};
