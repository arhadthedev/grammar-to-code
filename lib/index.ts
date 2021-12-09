/** index.ts - Library entry point for `require('grammar2code')`
 *
 * Copyright (c) 2022 Oleg Iarygin <oleg@arhadthedev.net>
 *
 * Distributed under the MIT software license; see the accompanying
 * file LICENSE.txt or <https://www.opensource.org/licenses/mit-license.php>.
 */

export * from "./grammar";
export * from "./error";

import { PositionalError } from "./error"

export function convertGrammarToCode(grammar: string): string | PositionalError {
    return "";
}
