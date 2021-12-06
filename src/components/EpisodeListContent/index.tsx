import { useState } from "react";
import EpisodeList from "../Episode";

import * as S from "./styles";

export interface EpisodeListProps {
  episodes: any;
}

const EpisodeListContent = ({ episodes }: EpisodeListProps) => {
  const [seasonNumber, setSeasonNumber] = useState(1);

  return (
    <S.EpisodesContent>
      <S.EpisodeSeason>
        <S.ButtonSeason
          seasonNumber={1}
          season={seasonNumber}
          onClick={() => setSeasonNumber(1)}
        >
          Season 1
        </S.ButtonSeason>
        <S.ButtonSeason
          seasonNumber={2}
          season={seasonNumber}
          onClick={() => setSeasonNumber(2)}
        >
          Season 2
        </S.ButtonSeason>
        <S.ButtonSeason
          seasonNumber={3}
          season={seasonNumber}
          onClick={() => setSeasonNumber(3)}
        >
          Season 3
        </S.ButtonSeason>
      </S.EpisodeSeason>

      <S.TableEpisodes id="customers">
        <thead>
          <tr>
            <th>Season</th>
            <th>Number</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        {episodes.loading === false &&
          episodes.data.map((item: any) => {
            return (
              item.season === seasonNumber && (
                <EpisodeList
                  key={item.name}
                  season={item.season}
                  serieDate={item.airdate!}
                  serieName={item.name}
                  serieNumber={item.number}
                />
              )
            );
          })}
      </S.TableEpisodes>
    </S.EpisodesContent>
  );
};

export default EpisodeListContent;
