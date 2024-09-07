import { Competition } from "../interface/base";

interface CompetitionCardProps {
  competition: Competition;
}
interface CompetitionListProps {
  competitions: Competition[];
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <div className="bg-babyBlue border border-blueGrotto rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2 text-navyBlue">
        {competition.name}
      </h2>
      <p className="text-blueGrotto mb-4">{competition.shortDescription}</p>
      <p className="text-blueGreen mb-2">
        <strong>Technology/Theme:</strong> {competition.techno}
      </p>
      <p className="text-blueGreen mb-2">
        <strong>Start Date:</strong>{" "}
        {competition.startDate.toLocaleDateString()}
      </p>
      <p className="text-blueGreen mb-4">
        <strong>End Date:</strong> {competition.endDate.toLocaleDateString()}
      </p>
      {competition.location && (
        <p className="text-blueGreen mb-4">
          <strong>Location:</strong> {competition.location}
        </p>
      )}
      {competition.prizes && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-navyBlue">Prizes</h3>
          {competition.prizes.firstPrize && (
            <p className="text-blueGreen">
              <strong>First Prize:</strong> {competition.prizes.firstPrize}
            </p>
          )}
          {competition.prizes.secondPrize && (
            <p className="text-blueGreen">
              <strong>Second Prize:</strong> {competition.prizes.secondPrize}
            </p>
          )}
          {competition.prizes.thirdPrize && (
            <p className="text-blueGreen">
              <strong>Third Prize:</strong> {competition.prizes.thirdPrize}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const CompetitionList: React.FC<CompetitionListProps> = ({ competitions }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {competitions.map((competition, index) => (
        <CompetitionCard key={index} competition={competition} />
      ))}
    </div>
  );
};

export default CompetitionList;
