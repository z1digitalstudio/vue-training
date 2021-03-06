module.exports = {
  extractComments: 'all',
  terserOptions: {
    compress: {
      arrows: true,
      collapse_vars: true,
      comparisons: true,
      computed_props: true,
      hoist_funs: true,
      hoist_props: true,
      hoist_vars: true,
      inline: true,
      loops: true,
      negate_iife: true,
      properties: true,
      reduce_funcs: true,
      reduce_vars: true,
      switches: true,
      toplevel: true,
      typeofs: true,
      booleans: true,
      if_return: true,
      sequences: true,
      unused: true,
      conditionals: true,
      dead_code: true,
      evaluate: true
    },
    mangle: {
      safari10: true
    }
  },
  sourceMap: false,
  cache: true,
  parallel: true
}