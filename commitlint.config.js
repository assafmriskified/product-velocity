/* eslint-env node */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'body-max-line-length': [1, 'always', 200],
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'ci',
                'chore',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'bump',
            ],
        ],
        'scope-empty': [0],
    },
};
