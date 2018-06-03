const { rollup } = require('rollup')
const { uglify } = require('rollup-plugin-uglify')
const typescript = require('rollup-plugin-typescript2')
const prepack = require('rollup-plugin-prepack-up')

function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED']

  if (!suppressed.find((code) => message.code === code)) {
    return console.warn(message.message)
  }
}

const outputOpts = {
  file: 'dist/bundle.js',
  format: 'iife',
  sourcemap: false
}

const inputOpts = {
  input: './src/main.ts',
  plugins: [
    typescript(),
    prepack(outputOpts.file),
    uglify()
  ],
  onwarn
}

async function build() {
  const bundle = await rollup(inputOpts)

  await bundle.write(outputOpts)
}

build()
