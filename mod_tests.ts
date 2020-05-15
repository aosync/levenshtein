import {
  assertStrictEq,
} from "https://deno.land/std/testing/asserts.ts";

import levenshstein from "./mod.ts";

Deno.test("testing sanity with cases", () => {
  assertStrictEq(levenshstein("", ""), 0);
  assertStrictEq(levenshstein("hello", "hallo"), 1);
  assertStrictEq(levenshstein("ana", "yyy"), 3);
  assertStrictEq(levenshstein("ana", "ayy"), 2);
});
