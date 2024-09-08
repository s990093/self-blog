import { PrizeType } from "@/app/interface/base";
import { TextItem } from "./STLViewer/helper";
import STLViewer from "./STLViewer/STLViewer";
import BaseMedalViewer from "./STLViewer/BaseMadel";

interface MedalProps {
  name: string;
  prizeRank: PrizeType;
  prizeDescription?: string;
  startDate: Date;
}

const Medal: React.FC<MedalProps> = ({
  name,
  prizeRank,
  prizeDescription,
  startDate,
}) => {
  const formattedDate = `${startDate.getFullYear().toString().slice(-2)}/${
    startDate.getMonth() + 1
  }/${startDate.getDate()}`;

  // Adjust text x-coordinate for specific prize types
  const textXCoordinate =
    prizeRank === PrizeType.Participation
      ? -23
      : prizeRank === PrizeType.ExcellentWork ||
        prizeRank === PrizeType.HonorableMention
      ? -26
      : -18;

  // Define the text items for the STLViewer
  const textItems: TextItem[] = [
    {
      name: prizeRank,
      x: textXCoordinate,
      y: -3,
      color: "#FFD700", // Gold color
    },
    {
      name: formattedDate,
      x: -12,
      y: -15,
      size: 3.4,
      color: "#000000", // Black color
    },
  ];

  return (
    <STLViewer
      xOffset={-55}
      yOffset={-50}
      scale={2.9}
      height={320}
      width={320}
      stlPath="/3d/Medal.STL"
      medalType="champion"
      reflectivity={10}
      shininess={100}
      texturePath="/3d/textures/metal.jpg"
      textArray={textItems}
      fontPath="/fonts/helvetiker_bold.typeface.json"
    />
  );
};

export default Medal;
