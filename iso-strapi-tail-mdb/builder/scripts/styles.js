/**
 * transpile styles from scss to css
 * scope by style tag parameters to component or global
 */

import * as sassDef from 'node-sass';

export async function getCSS(scss_content, scope) {

    scss_content = `
${scope ? scope : "body"}{
    ${scss_content}
}
`;

    let sass = sassDef.default;
    return sass.renderSync({
        data: scss_content
    }).css.toString('utf8');
}

export async function renderSCSSFile(from, to) {
 
    return sassDef.renderSync({
        file: from, 
        outputStyle: 'compressed',
        outFile: to,
        sourceMap: true, // or an absolute or relative (to outFile) path
    });
}