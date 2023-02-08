import {join} from 'pathe';
import {defineNuxtModule} from '@nuxt/kit';
import Vue from 'vue';

const fs = require('fs');

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if (typeof require.context === 'undefined') {
    require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
        const files = {};

        function readDirectory(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = join(directory, file);

                if (fs.statSync(fullPath).isDirectory()) {
                    if (scanSubDirectories) readDirectory(fullPath);

                    return;
                }

                if (!regularExpression.test(fullPath)) return;

                files[fullPath] = true;
            });
        }

        readDirectory(join(__dirname, 'components'));

        function Module(file) {
            return require(file);
        }

        Module.keys = () => Object.keys(files);

        return Module;
    };
}

export default defineNuxtModule({
    hooks: {
        "components:dirs"(dirs) {
            dirs.push({
                path: join(__dirname, 'components'),
                prefix: 'tw',
            });
        }
    }
})

try {

    const components = require.context(
        join(__dirname, 'components'),
        false,
        /Tw[A-Z]\w+\.(vue|js)$/
    );

    components.keys().forEach((fileName) => {
        const componentConfig = components(fileName)
        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
        )
        Vue.component(componentName, componentConfig.default || componentConfig)
    });

} catch (e) {

    console.log(e);

}