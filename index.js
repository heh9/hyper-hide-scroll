exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .xterm-viewport { overflow: hidden !important; }
    `
  })
}
