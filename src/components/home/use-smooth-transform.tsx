import {
  useSpring,
  useTransform,
  MotionValue,
  SpringOptions,
} from "framer-motion";

// Define the type for the transformer function
type Transformer<T> = (value: T) => number;

export function useSmoothTransform<T>(
  value: MotionValue<T>,
  springOptions: SpringOptions,
  transformer: Transformer<T>
): MotionValue<number> {
  // Apply the transformer function to the value and use spring for smooth transitions
  return useSpring(useTransform(value, transformer), springOptions);
}
