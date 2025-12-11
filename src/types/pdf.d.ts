// Type declarations for PDF generation libraries
declare module 'html2canvas' {
  interface Options {
    scale?: number;
    useCORS?: boolean;
    backgroundColor?: string;
    logging?: boolean;
    width?: number;
    height?: number;
  }

  function html2canvas(element: HTMLElement, options?: Options): Promise<HTMLCanvasElement>;
  export default html2canvas;
}

declare module 'jspdf' {
  interface jsPDFOptions {
    orientation?: 'portrait' | 'landscape';
    unit?: 'pt' | 'px' | 'in' | 'mm' | 'cm' | 'ex' | 'em' | 'pc';
    format?: string | number[];
  }

  class jsPDF {
    constructor(options?: jsPDFOptions);
    internal: {
      pageSize: {
        getWidth(): number;
        getHeight(): number;
      };
    };
    addImage(
      imageData: string,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): jsPDF;
    save(filename: string): void;
  }

  export default jsPDF;
}
