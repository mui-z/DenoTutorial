import { writableStreamFromWriter } from "https://deno.land/std@0.167.0/streams/mod.ts";

const fileResponse = await fetch ("https://deno.land/logo.svg");

if (fileResponse.body) {
  const file = await Deno.open("./logo.svg", { write: true, create: true });
  const writableStream = writableStreamFromWriter(file);
  await fileResponse.body.pipeTo(writableStream);
}

import { readableStreamFromReader } from "https://deno.land/std@0.167.0/streams/mod.ts";

const file = await Deno.open("./logo.svg", { read: true });
const readableStream = readableStreamFromReader(file);

await fetch("https://example.com/", {
  method: "POST",
  body: readableStream,
});

