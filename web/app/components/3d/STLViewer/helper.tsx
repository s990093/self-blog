export interface TextItem {
  name: string;
  x: number;
  y: number;
  z?: number; // Depth
  size?: number; // Font size
  height?: number; // Text height
  color?: string; // Text color
}

export interface STLViewerProps {
  height: number;
  width: number;
  xOffset?: number;
  yOffset?: number;
  scale?: number;
  enableBackground?: boolean; // 是否启用背景
  stlPath: string; // STL 文件路径
  medalType:
    | "champion"
    | "runner-up"
    | "third-place"
    | "participation"
    | "other"; // 奖牌类型
  reflectivity?: number; // 反光度
  shininess?: number; // 光泽度
  texturePath?: string; // 纹理图像路径
  textArray?: TextItem[]; // Array of text items
  fontPath?: string; // Path to the font file
}
export interface UseSTLModelProps {
  mountRef: React.RefObject<HTMLDivElement>;
  enableBackground?: boolean;
  stlPath: string;
  medalType:
    | "champion"
    | "runner-up"
    | "third-place"
    | "participation"
    | "other";
  scale: number;
  xOffset?: number;
  yOffset?: number;
  texturePath?: string;
  textArray?: TextItem[];
  fontPath?: string | null;
}

export interface AnimationConfig {
  type: "rotation" | "scaling"; // Add more types as needed
  axis?: "x" | "y" | "z"; // Axis to apply rotation or scaling
  speed?: number; // Animation speed
  delayMs?: number; // Delay before animation starts
  repeatTimes?: number; // How many times to repeat the animation
  scaleFactor?: number; // Used for scaling animation
}

// Update AnimationConfig to support multiple actions
export type AnimationAction = {
  type: "rotation" | "scaling" | "translation"; // Add more types if needed
  axis?: "x" | "y" | "z"; // Optional axis for certain actions
  speed?: number; // Speed of rotation or translation
  scaleFactor?: number; // Scaling factor for scaling actions
  delayMs?: number; // Delay before the action starts
  repeatTimes?: number; // How many times to repeat the action
  duration?: number; // Duration for actions like scaling
  distance?: number; // Translation distance for the object
};

export const getMedalColor = (
  medalType:
    | "champion"
    | "runner-up"
    | "third-place"
    | "participation"
    | "other"
): string => {
  switch (medalType) {
    case "champion":
      return "#FFD700"; // Gold
    case "runner-up":
      return "#C0C0C0"; // Silver
    case "third-place":
      return "#cd7f32"; // Bronze
    case "participation":
      return "#00FF00"; // Green (example for participation)
    case "other":
      return "#888888"; // Gray (example for other)
    default:
      return "#555555"; // Default color
  }
};

/**
 * Checks if the text exceeds the maximum allowed length and truncates it if necessary.
 *
 * @param text - The text to be checked.
 * @param maxLength - The maximum allowed length for the text.
 * @returns The truncated text with an ellipsis if it exceeds the maximum length; otherwise, returns the original text.
 */
export const checkAndTruncateText = (
  text: string,
  maxLength: number = 15 // Default value for maxLength
): string => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength - 3)}...`; // Truncate text and add ellipsis
  }
  return text; // Return original text if within the length limit
};
