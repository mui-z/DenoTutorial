import { copy } from "https://deno.land/std@0.167.0/streams/conversion.ts";
for (const filename of Deno.args) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}
