import slugify from "slugify";
import {
  ContentfulJournalEntry,
  getField,
  ParagraphContent,
} from "./ContentfulJournalEntry";

export interface JournalEntry {
  id: string;
  body: string[];
  character: string;
  logDate: string;
  title: string;
  slug: string;
}

function contentfulEntryToJournalEntry(
  data: ContentfulJournalEntry
): JournalEntry {
  const body =
    getField<ParagraphContent>("body", data)
      ?.content.map((entry) =>
        entry.content.map((innerEntry) => innerEntry.value.split("\n")).flat()
      )
      .flat() ?? [];
  const character = getField<string>("character", data) ?? "";
  const title = getField<string>("title", data) ?? "";
  const slug = `${slugify(character)}-${slugify(title)}`;
  const logDate = getField<string>("logDate", data) ?? "";
  const id = data.sys.id;

  return {
    id,
    body,
    character,
    logDate,
    title,
    slug,
  };
}

export { contentfulEntryToJournalEntry };
