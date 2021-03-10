/**
 * transpile styles from scss to css
 * scope by style tag parameters to component or global
 */

import * as sassDef from 'node-sass';
import { PurgeCSS } from 'purgecss';

/**
 * 
 * @param {*} scss_content 
 * @param {*} scope 
 */
export async function getCSS(scss_content, scope) {

    scss_content = (scope.trim() === "") ? scss_content : `
    ${scope ? scope : " "}{
        ${scss_content}
    }
    `;

    let sass = sassDef.default;
    return sass.renderSync({
        data: scss_content ? scss_content : "\n"
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

export async function purgeCSSFromFiles(buildFolder) {

    const purged = await new PurgeCSS().purge({
        content: [buildFolder + '/**/*.html'],
        css: [buildFolder + '/**/*.css']
    });

}
export async function purgeCSSFromString(css, html) {

    let purged = await new PurgeCSS().purge({
        content: [{ raw: html, extension: "html" }],
        css: [{ raw: css }]
    });
    console.log("PURGED ", purged);
    return purged;
}
