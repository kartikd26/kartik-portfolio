export type Demo = {
  id: string;
  title: string;
  company: string;
  caption: string;
  metric: string;
  tag: string;
  kind: "local" | "drive";
  src: string; // local mp4 path, or Google Drive file id
};

export const DEMOS: Demo[] = [
  {
    id: "invoice-ocr",
    title: "AI Invoice OCR System",
    company: "FactWise",
    caption:
      "Reads an invoice, scores how confident it is, and routes it through approval.",
    metric: "Hours to under 2 min",
    tag: "notion-tag-orange",
    kind: "local",
    src: "/demos/invoice-ocr.mp4",
  },
  {
    id: "bom-mapper",
    title: "BOM Data Mapper",
    company: "FactWise",
    caption:
      "Maps a messy supplier spreadsheet onto a clean schema with fuzzy matching.",
    metric: "60% efficiency gain",
    tag: "notion-tag-green",
    kind: "local",
    src: "/demos/bom-mapper.mp4",
  },
  {
    id: "sales-call-analyzer",
    title: "Sales Call Analyzer",
    company: "Project",
    caption:
      "Transcribes and sentiment-scores sales calls to surface what actually converts.",
    metric: "500+ calls a month",
    tag: "notion-tag-blue",
    kind: "local",
    src: "/demos/sales-call-analyzer.mp4",
  },
  {
    id: "ai-avatar",
    title: "AI Interview Avatar",
    company: "Productathon, 1st place",
    caption:
      "An avatar that runs mock PM interviews and gives instant, personal feedback.",
    metric: "100+ mock interviews",
    tag: "notion-tag-purple",
    kind: "drive",
    src: "1fjRAZmYXzmSp31axSDShe0Rf3vGgNNiD",
  },
];

export const getDemo = (id: string): Demo | undefined =>
  DEMOS.find((d) => d.id === id);
