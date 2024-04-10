import I from "next/image";
import React from "react";

type ImageProps = React.ComponentProps<typeof I>;

export const Image = React.forwardRef<React.ElementRef<typeof I>, ImageProps>(
  (props, ref) => <I {...props} ref={ref} />
);

Image.displayName = "Image";
