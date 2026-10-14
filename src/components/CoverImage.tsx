import Image from "next/image";

/**
 * Business Leaders covers are mostly portrait headshots. Instead of cropping
 * them into the wide frame (which cuts through faces), show the whole photo
 * centered over a blurred copy of itself that fills the sides.
 */
const LETTERBOX_CATEGORIES = new Set(["business-leaders"]);

type Props = {
  src: string;
  alt: string;
  category: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes for the main image, e.g. hover zoom. */
  className?: string;
};

export default function CoverImage({
  src,
  alt,
  category,
  sizes,
  priority,
  className = "",
}: Props) {
  if (!LETTERBOX_CATEGORIES.has(category)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        priority={priority}
        sizes="64px"
        className="scale-110 object-cover opacity-80 blur-2xl"
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-contain ${className}`}
      />
    </>
  );
}
