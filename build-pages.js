const { execSync } = require('child_process');

process.env.NEXT_EXPORT = 'true';
console.log('Building for Cloudflare Pages (Static Export)...');

try {
  execSync('npx next build', {
    stdio: 'inherit',
    env: { ...process.env, NEXT_EXPORT: 'true' }
  });
  console.log('Build succeeded! Output ready in ./out');
} catch (err) {
  console.error('Build failed:', err.message);
  process.exit(1);
}
