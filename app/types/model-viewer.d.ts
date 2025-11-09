// Tell TypeScript about the custom <model-viewer> element
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "disable-zoom"?: boolean;
      "shadow-intensity"?: string;
      exposure?: string;
      ar?: boolean;
      "ar-modes"?: string;
      style?: React.CSSProperties;
    };
  }
}