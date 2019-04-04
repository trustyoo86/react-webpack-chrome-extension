/**
 * deveopment config
 * 
 * @author kern86
 * @since 2019.04.04 - draft
 */
'use strict';

const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  watch: true,
  devtool: '#source-map',
});