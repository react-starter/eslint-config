module.exports = {
	"parserOptions": {
		"ecmaVersion": 11,
		"sourceType": "script",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
		"plugin:you-dont-need-lodash-underscore/compatible"
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"import",
		"jsx-a11y",
		"jest-formatting"
	],
	settings: {
		react: {
			version: "detect"
		},
		"import/resolver": {
			node: {
				extensions: [
					".js",
					".jsx",
					".ts",
					".tsx",
					".json",
					".svg",
					".png"
				]
			}
		}
	},
	env: {
		"jest": true,
		"browser": true
	},
	globals: {
		"process": true,
		"module": true
	},
	rules: {
		"@typescript-eslint/interface-name-prefix": [
			"error",
			"always"
		],
		"eqeqeq": ["error", "always"],
		"indent": [
			"error",
			4,
			{
				"SwitchCase": 1
			}
		],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs"],
		"curly": ["error"],
		"dot-location": ["error", "property"],
		"array-bracket-spacing": ["error", "never"],
		"import/no-default-export": "warn",
		"array-callback-return": "error",
		"no-alert": "error",
		"no-invalid-this": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "error",
		"require-await": "error",
		"no-self-compare": "error",
		"comma-spacing": ["error", { "before": false, "after": true }],
		"comma-style": ["error", "last"],
		"prefer-promise-reject-errors": "error",
		"func-call-spacing": ["error", "never"],
		"implicit-arrow-linebreak": ["error", "beside"],
		"key-spacing": ["error", { "afterColon":true, "beforeColon" : false }],
		"linebreak-style": ["off", "unix"],
		"multiline-ternary": ["error", "always-multiline"],
		"no-lonely-if": "error",
		"no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside"],
		"operator-assignment": ["error", "always"],
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "never"],
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed"],
		"semi-spacing": ["error", {"before": false, "after": false}],
		"semi-style": ["error", "last"],
		"no-var": "error",
		"space-before-blocks": "error",
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"spaced-comment": ["error", "always"],
		"switch-colon-spacing": "error",
		"wrap-regex": "error",
		"arrow-spacing": ["error", { "before": true, "after": true }],
		"no-confusing-arrow": "error",
		"no-duplicate-imports": "error",
		"no-useless-rename": "error",
		"prefer-const": "error",
		"prefer-destructuring": ["off"],
		"no-unused-vars": "error",
		"space-unary-ops": [
			2, {
				"words": true,
				"nonwords": false
			}],
		"prefer-rest-params": "error",
		"prefer-template": "error",
		"prefer-spread": "error",
		"rest-spread-spacing": ["error", "never"],
		"import/prefer-default-export": [
			"off"
		],
		"import/order": [
			"warn",
			{
				"newlines-between": "never"
			}
		],
		"max-len": [
			"warn",
			{
				"code": 210,
				"ignoreUrls": true,
				"ignoreComments": true,
				"ignoreStrings": true
			}
		],
		"arrow-parens": [
			"error",
			"always"
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"eol-last": [
			"error",
			"never"
		],
		"jsx-quotes": [
			"error",
			"prefer-single"
		],
		"quotes": [
			"error",
			"single",
			{ "allowTemplateLiterals": true }
		],
		"no-use-before-define": [
			"off"
		],
		"no-underscore-dangle": [
			"error",
			{
				"allow": [
					"_links"
				]
			}
		],
		"arrow-body-style": [
			"off"
		],
		"no-console": ["error", { "allow": ["warn"] }],
		"template-curly-spacing": "error",
		"object-curly-newline": [
			"error",
			{
				"ObjectExpression": {
					"minProperties": 2,
					"multiline": true,
					"consistent": true
				},
				"ObjectPattern": {
					"consistent": true
				},
				"ImportDeclaration": {
					"consistent": true
				},
				"ExportDeclaration": {
					"consistent": true
				}
			}
		],
		"object-property-newline": [
			"error",
			{
				"allowMultiplePropertiesPerLine": false
			}
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"keyword-spacing": ["error", { "before": true }],
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": [
					"**/*.test.js",
					"**/setupTests.js"
				],
				"optionalDependencies": false
			}
		],
		"no-empty-function": ["off"],
		"@typescript-eslint/no-empty-function": "off",
		"semi": [
			"error",
			"always"
		],
		"react/jsx-tag-spacing": [
			"error",
			{
				"closingSlash": "never",
				"beforeSelfClosing": "always",
				"afterOpening": "never",
				"beforeClosing": "allow"
			}
		],
		"react/jsx-curly-brace-presence": [1, "never"],
		"react/jsx-filename-extension": [
			"error",
			{
				"extensions": [
					".js",
					".jsx",
					".tsx",
					".ts"
				]
			}
		],
		"react/jsx-indent": [
			"error",
			4
		],
		"react/jsx-indent-props": [
			"error",
			4
		],
		"react/jsx-curly-spacing": [
			1,
			{
				"when": "always",
				"attributes": false
			}
		],
		"react/prop-types": [
			"off"
		],
		"react/display-name": [
			"off"
		],
		"react/jsx-key": [
			"off"
		],
		"react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
		"react/jsx-max-props-per-line": [1, { "when": "always", "maximum": 1 }],
		"react/jsx-wrap-multilines": [1, {
			"declaration": "parens-new-line",
			"assignment": "parens-new-line",
			"return": "parens-new-line",
			"arrow": "parens-new-line",
			"condition": "ignore",
			"logical": "ignore",
			"prop": "ignore"
		}],
//    "react/jsx-one-expression-per-line": 1,
		"react/jsx-closing-bracket-location": [2, "tag-aligned"],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		// the suggested improvement does not account for nested props, ie omit(bigObject, 'omit.nested.value')
		// which means omit() is still of use, especially in tests where we manipulate/reset state
		"you-dont-need-lodash-underscore/omit": "off",
		"jest-formatting/padding-around-before-each-blocks": 2,
		"jest-formatting/padding-around-before-all-blocks": 2,
		"jest-formatting/padding-around-after-each-blocks": 2,
		"jest-formatting/padding-around-after-all-blocks": 2,
		"jest-formatting/padding-around-describe-blocks": 2,
		"jest-formatting/padding-around-test-blocks": 2
	},
	overrides: [
		{
			files: [
				"*.test.js",
				"*.js"
			],
			rules: {
				"@typescript-eslint/explicit-function-return-type": [
					"off"
				],
				"@typescript-eslint/no-use-before-define": [
					"off"
				]
			}
		},
		{
			files: ["config/**/*.js", "scripts/**/*.js"],
			globals: {
				"__dirname": true
			},
			rules: {
				"import/no-extraneous-dependencies": ["off"],
				"@typescript-eslint/no-var-requires": ["off"],
				"@typescript-eslint/camelcase": ["off"],
				"no-console": ["off"]
			}
		},
		{
			files: [
				"**/data/**/*.js",
				"**/data/**/*.ts",
				"**/*Data.ts",
				"**/*Data.js"
			],
			rules: {
				"max-len": "off"
			}
		}
	]
};