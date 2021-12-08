#!/usr/bin/env node
/** grammar-to-code - CLI wrapper around grammar-to-code library
 *
 * Copyright (c) 2022 Oleg Iarygin <oleg@arhadthedev.net>
 *
 * Distributed under the MIT software license; see the accompanying
 * file LICENSE.txt or <https://www.opensource.org/licenses/mit-license.php>.
 */

import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import getStdin from 'get-stdin';
import { readFileSync } from 'node:fs';

const optionDefinitions = [
    {
        name: 'help',
        description: 'Show this help and exit',
        alias: 'h',
        type: Boolean
    },
    {
        name: 'version',
        description: 'Show version info and exit',
        type: Boolean
    }
];

const usage = [
    {
        header: 'Grammar2code',
        content: [
            'Recursive descent parser code generator for a grammar file.',
            '',
            'For input grammar, Grammarkdown is supported.'
        ]
    },
    {
        header: 'Synopsis',
        content: [
            '$ grammar2code {bold --help}',
            '$ grammar2code {bold --version}',
            '$ grammar2code < {underline grammar} > {underline code}'
        ]
    },
    {
        header: 'Options',
        optionList: optionDefinitions,
    },
    {
        header: 'Bugs',
        content: 'For bugs and suggestions, use <{underline '
            + 'https://github.com/arhadthedev/grammar2code/issues}>.'
    },
    {
        header: 'Authors',
        content: 'Oleg Iarygin <{underline oleg@arhadthedev.net}>.'
    }
];

function printHelp() {
    console.log(commandLineUsage(usage));
}

function printVersion() {
    const packageInformationPath = new URL('../package.json', import.meta.url);
    const packageInformation = JSON.parse(readFileSync(packageInformationPath));
    console.log(packageInformation.version);
}

const options = commandLineArgs(optionDefinitions);
if (options.help) {
    printHelp();
} else if (options.version) {
    printVersion();
} else {
    const grammarDescription = getStdin();
}
