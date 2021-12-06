import { Link } from "react-router-dom";

export interface EpisodeListProps {
  serieNumber: number;
  serieName: string;
  serieDate: string;
  season: number;
}

const EpisodeList = ({
  serieNumber,
  serieName,
  serieDate,
  season,
}: EpisodeListProps) => {
  return (
    <tbody>
      <tr>
        <td>{season}</td>
        <td>
          <Link to={`/episode/${serieNumber}/${season}`}>{serieNumber}</Link>
        </td>
        <td>{serieName}</td>
        <td>{serieDate}</td>
      </tr>
    </tbody>
  );
};

export default EpisodeList;
