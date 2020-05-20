import {
  assertStrictEq,
} from "https://deno.land/std/testing/asserts.ts";

import levenshtein from "./mod.ts";

Deno.test("testing sanity with cases", () => {
  assertStrictEq(levenshtein("", ""), 0);
  assertStrictEq(levenshtein("ab", "ab"), 0);
  assertStrictEq(levenshtein("tabad", "tabd"), 1);
  assertStrictEq(levenshtein("hello", "hallo"), 1);
  assertStrictEq(levenshtein("ana", "yyy"), 3);
  assertStrictEq(levenshtein("ana", "ayy"), 2);
  assertStrictEq(levenshtein("akak", "kak"), 1);
  assertStrictEq(levenshtein("quick", "quiker"), 3);
  assertStrictEq(levenshtein("arch", "arkh"), 1);
  assertStrictEq(levenshtein("arch", "abkh"), 2);
  assertStrictEq(levenshtein("kitten", "sitting"), 3);
});
