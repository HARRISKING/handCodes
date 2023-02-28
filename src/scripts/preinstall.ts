if (!/yarn/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33m请使用yarn包管理器\n`);
  process.exit(1);
}
