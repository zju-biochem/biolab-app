export type PaperSearchParam={
  field: "all" | "subject" | "title" | "keyword" | "teacher" | "content" | "publishYear" | "major";
  value: string;
}[];

export type ReagentSearchParam={
  field: "chineseName" | "englishName" | "alias" | "name";
  value: string;
}[];

export type InstrumentSearchParam={
  field: "chineseName" | "englishName" | "modelNumber";
  value: string;
}[];
