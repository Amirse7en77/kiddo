// watch-context.js (ESM Version)
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import tree from 'tree-node-cli';
import chokidar from 'chokidar';

// --- Configuration ---
const OUTPUT_FILE = 'project-context.txt';
const INCLUDE_PATTERNS = [
  'src/**/*.{js,jsx,ts,tsx,css,scss}',
  '**/*.md',
  'public/index.html',
  'package.json',
  'vite.config.js',
  'tailwind.config.js',
  'tsconfig.json',
];
const IGNORE_PATTERNS = [
  'node_modules/**',
  'build/**',
  'dist/**',
  '.git/**',
  'src/assets/**',
  OUTPUT_FILE,
  '*.log',
];
// --- End Configuration ---

async function generateContext() {
  console.log('🔄 Generating project context...');

  const directoryTree = tree('.', {
    allFiles: true,
    exclude: [
      /node_modules/,
      /build/,
      /dist/,
      /\.git/,
      /project-context\.txt/,
      /yarn\.lock/,
      /package-lock\.json/,
      /\.DS_Store/
    ],
    maxDepth: 5,
  });

  let contextContent = 'PROJECT CONTEXT\n\n';
  contextContent += '================\n';
  contextContent += 'DIRECTORY STRUCTURE\n';
  contextContent += '================\n\n';
  contextContent += directoryTree;
  contextContent += '\n\n';

  const files = await glob(INCLUDE_PATTERNS, { ignore: IGNORE_PATTERNS, dot: true });

  for (const file of files) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      contextContent += `================\nFILE: ${file}\n================\n\n\`\`\`\n${fileContent}\n\`\`\`\n\n`;
    } catch (error) {
      console.warn(`Could not read file: ${file}. Skipping.`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, contextContent);
  console.log(`✅ Project context updated in ${OUTPUT_FILE}`);
}

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function watch() {
  console.log('🚀 Starting context watcher...');
  
  const debouncedGenerateContext = debounce(generateContext, 500);
  const pathsToWatch = ['src', 'public', '.'];

  const watcher = chokidar.watch(pathsToWatch, {
    ignored: IGNORE_PATTERNS,
    persistent: true,
    ignoreInitial: true,
  });

  watcher
    .on('add', path => {
      console.log(`File ${path} has been added`);
      debouncedGenerateContext();
    })
    .on('change', path => {
      console.log(`File ${path} has been changed`);
      debouncedGenerateContext();
    })
    .on('unlink', path => {
      console.log(`File ${path} has been removed`);
      debouncedGenerateContext();
    });

  generateContext();
  console.log('👀 Watching for file changes...');
}

watch();