import vueCourseConfig from '@shgk/vue-course-taskbook/configs/eslint.config.js'

export default [
  // По умолчанию установлены:
  // - Рекомендуемые правила ESLint: https://eslint.org/docs/latest/rules/
  // - Рекомендуемые правила TypeScript: https://typescript-eslint.io/rules/
  // - Рекомендуемые правила Vue (с некоторыми отключенными правилами): https://eslint.vuejs.org/rules/
  ...vueCourseConfig,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'group', 'groupEnd', 'groupCollapsed'] }],
      'comma-dangle': ['error', 'always-multiline'],
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-v-html': 'off',
      camelcase: 'off',
      'vue/require-prop-types': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/unified-signatures': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]
