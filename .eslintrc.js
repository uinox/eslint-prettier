module.exports = {
    "extends": "eslint:recommended",
    "plugins": ["vue", "vue-pro"],
    "parserOptions": {
        "ecmaVersion": 2020, // 你可以设置为你需要的 ECMAScript 版本
        "sourceType": "module" // 这个选项允许你使用 import/export 语法
    },
    "parser": "vue-eslint-parser",
    "rules": {
        "no-undef": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-unused-vars": "off",
    },
    "overrides": [
        {
            "files": "*.vue",
            "rules": {
                "vue-pro/handle-event-naming": [
                    "error",
                    {
                        "prefixes": ["handle", "on"],
                        "suffixes": ["Submit"],
                        "caseType": "camelCase", //['kebab-case', 'camelCase']
                        "maxLen": 20
                    }
                ],
                "vue-pro/css-naming": [
                    "error",
                    {
                        "caseType": "kebab-case", // ['camelCase', 'kebab-case']
                    }
                ],
                "vue-pro/constant-naming": [
                    "error",
                    {
                        "pattern": /^[A-Z][A-Z_]*[A-Z]$/, // CONFIG_IMGURL
                    }
                ],
            }
        },
    ]
  }