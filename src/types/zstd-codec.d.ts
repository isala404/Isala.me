declare module 'zstd-codec' {
  export interface ZstdSimple {
    compress(data: Uint8Array, level?: number): Uint8Array;
    decompress(data: Uint8Array): Uint8Array;
  }

  export interface ZstdCodecInstance {
    Simple: new () => ZstdSimple;
  }

  export const ZstdCodec: {
    run(callback: (zstd: ZstdCodecInstance) => void): void;
  };
}
