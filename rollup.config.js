import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { terser } from "rollup-plugin-terser";
import replace from '@rollup/plugin-replace';
import visualizer from 'rollup-plugin-visualizer';

const PRODUCTION = (process.env.NODE_ENV === "production");

export default [
    {
        input: 'src/lib/index.js',
        output: [
            {
                file: pkg.module,
                format: 'esm',
                globals: {
                    'react': 'react',
                    'react-dom': 'react-dom'
                }
            },
            {
                file: pkg["main"],
                format: 'umd',
                globals: {
                    'react': 'react',
                    'react-dom': 'react-dom'
                },
                name: 'index.js'
            }],
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(PRODUCTION ? "production" : "development")
            }),
            external(),
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                plugins: [
                    "@babel/plugin-proposal-function-bind",
                    "@babel/plugin-proposal-class-properties"
                ],
                presets: [
                    ["@babel/preset-env", {"targets": { "node": "current" }}],
                    "@babel/preset-react"
                ]
            }),
            resolve({
                mainFields: ["browser", "jsnext", 'module', 'main']
            }),
            commonjs({
                // non-CommonJS modules will be ignored, but you can also
                // specifically include/exclude files
                include: 'node_modules/**',  // Default: undefined
                // these values can also be regular expressions
                // include: /node_modules/

                // search for files other than .js files (must already
                // be transpiled by a previous plugin!)
                extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

                // if true then uses of `global` won't be dealt with by this plugin
                ignoreGlobal: false,  // Default: false

                // if false then skip sourceMap generation for CommonJS modules
                sourceMap: false,  // Default: true

                // sometimes you have to leave require statements
                // unconverted. Pass an array containing the IDs
                // or a `id => boolean` function. Only use this
                // option if you know what you're doing!
                ignore: [ 'conditional-runtime-dependency' ]
            }),
            json(),
            globals(),
            builtins(),
            (PRODUCTION ? terser({
                compress: {
                    drop_debugger: true
                }
            }) : null),
            (PRODUCTION ? visualizer({gzipSize: true}) : null)
        ]
    }
]
