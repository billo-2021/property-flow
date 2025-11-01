import StyleDictionary from 'style-dictionary';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const { projectRoot = 'vds', outputPath = 'dist/vds' } = args;

if (!projectRoot) {
  console.error('Error: --projectRoot argument not found.');
  process.exit(1);
}

if (!outputPath) {
  console.error('Error: --outputPath argument not found.');
  process.exit(1);
}

const config = {
  source: [`${projectRoot}/src/lib/tokens/**/*.json`],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: `${outputPath}/scss/`,
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: `${outputPath}/ts/`,
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6-single-quotes',
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: `${outputPath}/json/`,
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: `${outputPath}/css/`,
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
  },
};

const sd = new StyleDictionary();
const dictionary = await sd.extend(config);
await dictionary.buildAllPlatforms();
